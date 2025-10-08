'use client';

import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Camera, Upload, Leaf, AlertTriangle, CheckCircle, Loader2, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PilotNotice } from '@/components/ui/pilot-notice';

interface DiagnosisResult {
  isPlant: boolean;
  plantType: string;
  isHealthy: boolean;
  diseaseName: string;
  confidenceScore: number;
  diseaseDescription: string;
  diseaseSeverity: string;
  affectedParts: string[];
  preventativeMeasures: string[];
  productRecommendations: string[];
  rnzProductUsage: string;
  additionalInsights: string;
}

export default function DiseaseDetectionPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submittingExpert, setSubmittingExpert] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  // Request camera permissions
  const requestCameraPermission = async () => {
    try {
      if (typeof window !== 'undefined' && window.Capacitor) {
        const { Camera } = await import('@capacitor/camera');
        const permission = await Camera.checkPermissions();
        
        if (permission.camera === 'granted') {
          return true;
        } else {
          const request = await Camera.requestPermissions();
          return request.camera === 'granted';
        }
      }
      return true; // For web, permissions are handled by browser
    } catch (error) {
      console.error('Permission request error:', error);
      return false;
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(result);
        setDiagnosis(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      // Check if we're on mobile/Android
      if (typeof window !== 'undefined' && window.Capacitor) {
        // Use Capacitor Camera plugin for better mobile support
        const { Camera } = await import('@capacitor/camera');
        
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: 'dataUrl',
          source: 'CAMERA'
        });
        
        if (image.dataUrl) {
          setImagePreview(image.dataUrl);
          setDiagnosis(null);
        }
      } else {
        // Fallback to web camera for desktop
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        setStream(mediaStream);
        setShowCamera(true);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      }
    } catch (error) {
      console.error('Camera error:', error);
      toast({
        title: 'Camera Error',
        description: 'Unable to access camera. Please check permissions or upload an image instead.',
        variant: 'destructive'
      });
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        
        const dataURL = canvasRef.current.toDataURL('image/jpeg');
        setImagePreview(dataURL);
        setDiagnosis(null);
        stopCamera();
      }
    }
  };

  const analyzeImage = async () => {
    if (!imagePreview) {
      toast({
        title: 'No Image',
        description: 'Please upload or capture an image first.',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/disease-detection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ photoDataUri: imagePreview })
      });

      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }

      const result = await response.json();
      setDiagnosis(result);
      
      toast({
        title: 'Analysis Complete',
        description: 'Plant disease analysis completed successfully!',
      });
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: 'Analysis Error',
        description: 'Failed to analyze the image. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConfidenceColor = (score: number) => {
    if (score >= 0.8) return 'text-green-600';
    if (score >= 0.6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const handleTalkToExpert = async () => {
    if (!diagnosis || !imagePreview) {
      toast({
        title: 'No Diagnosis Available',
        description: 'Please analyze a plant image first.',
        variant: 'destructive'
      });
      return;
    }

    setSubmittingExpert(true);
    try {
      const response = await fetch('/api/expert-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plantType: diagnosis.plantType,
          isHealthy: diagnosis.isHealthy,
          diseaseName: diagnosis.diseaseName,
          diseaseSeverity: diagnosis.diseaseSeverity,
          confidenceScore: diagnosis.confidenceScore,
          plantImage: imagePreview,
          diagnosisResult: diagnosis
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit expert request');
      }

      const result = await response.json();
      
      toast({
        title: 'Expert Request Submitted',
        description: 'Your request has been sent to our agricultural experts. You will be notified when they respond.',
      });

      // Optionally redirect to chat or show a modal
      // You can add navigation to RNZ chatbot here if needed

    } catch (error) {
      console.error('Expert request error:', error);
      toast({
        title: 'Request Failed',
        description: 'Failed to submit expert request. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setSubmittingExpert(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Plant Disease Detection 🌱</h1>
        <p className="text-center text-muted-foreground">
          Upload a photo of your plant to get instant disease diagnosis and RNZ treatment recommendations for India, Pakistan, Sri Lanka, Bangladesh & GCC countries
        </p>
      </div>

      <PilotNotice className="mb-6" />

      {/* Image Upload/Capture Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5" />
            Plant Photo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!showCamera ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="h-32 flex flex-col gap-2"
              >
                <Upload className="h-8 w-8" />
                <span>Upload Photo</span>
              </Button>
                             <Button
                 onClick={async () => {
                   const hasPermission = await requestCameraPermission();
                   if (hasPermission) {
                     startCamera();
                   } else {
                     toast({
                       title: 'Permission Denied',
                       description: 'Camera permission is required to take photos. Please enable it in settings.',
                       variant: 'destructive'
                     });
                   }
                 }}
                 variant="outline"
                 className="h-32 flex flex-col gap-2"
               >
                 <Camera className="h-8 w-8" />
                 <span>Take Photo</span>
               </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full rounded-lg"
                />
                <canvas ref={canvasRef} className="hidden" />
              </div>
              <div className="flex gap-2">
                <Button onClick={capturePhoto} className="flex-1">
                  Capture Photo
                </Button>
                <Button onClick={stopCamera} variant="outline">
                  Cancel
                </Button>
              </div>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />

          {imagePreview && (
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Plant preview"
                  className="w-full max-h-64 object-cover rounded-lg"
                />
              </div>
              <Button
                onClick={analyzeImage}
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze Plant'
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Diagnosis Results */}
      {diagnosis && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {diagnosis.isHealthy ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-red-600" />
              )}
              Diagnosis Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Plant Identification */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium">Plant Type</Label>
                <p className="text-lg font-semibold">{diagnosis.plantType}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Health Status</Label>
                <div className="flex items-center gap-2">
                  {diagnosis.isHealthy ? (
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      Healthy
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      Diseased
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Disease Information */}
            {!diagnosis.isHealthy && (
              <>
                <Separator />
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium">Disease</Label>
                      <p className="text-lg font-semibold">{diagnosis.diseaseName}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Confidence</Label>
                      <p className={`text-lg font-semibold ${getConfidenceColor(diagnosis.confidenceScore)}`}>
                        {(diagnosis.confidenceScore * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Severity</Label>
                    <Badge className={getSeverityColor(diagnosis.diseaseSeverity)}>
                      {diagnosis.diseaseSeverity}
                    </Badge>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Affected Parts</Label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {diagnosis.affectedParts.map((part, index) => (
                        <Badge key={index} variant="outline">
                          {part}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Disease Description</Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      {diagnosis.diseaseDescription}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* RNZ Product Recommendations */}
            {!diagnosis.isHealthy && diagnosis.productRecommendations.length > 0 && (
              <>
                <Separator />
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Recommended RNZ Products</Label>
                    <div className="space-y-2 mt-2">
                      {diagnosis.productRecommendations.map((product, index) => (
                        <Card key={index} className="p-3">
                          <h4 className="font-semibold text-green-700">{product}</h4>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Product Usage Instructions</Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      {diagnosis.rnzProductUsage}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Preventative Measures */}
            {diagnosis.preventativeMeasures.length > 0 && (
              <>
                <Separator />
                <div>
                  <Label className="text-sm font-medium">Preventative Measures</Label>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                    {diagnosis.preventativeMeasures.map((measure, index) => (
                      <li key={index}>{measure}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}

                         {/* Additional Insights */}
             {diagnosis.additionalInsights && (
               <>
                 <Separator />
                 <div>
                   <Label className="text-sm font-medium">Additional Insights</Label>
                   <p className="text-sm text-muted-foreground mt-1">
                     {diagnosis.additionalInsights}
                   </p>
                 </div>
               </>
             )}

             {/* Talk to Expert Button */}
             <Separator />
             <div className="text-center">
               <Button
                 onClick={handleTalkToExpert}
                 disabled={submittingExpert}
                 className="w-full max-w-md"
                 size="lg"
               >
                 {submittingExpert ? (
                   <>
                     <Loader2 className="h-4 w-4 animate-spin mr-2" />
                     Submitting Request...
                   </>
                 ) : (
                   <>
                     <MessageCircle className="h-4 w-4 mr-2" />
                     Talk to RNZ Expert
                   </>
                 )}
               </Button>
               <p className="text-xs text-muted-foreground mt-2">
                 Get personalized advice from our agricultural experts
               </p>
             </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
