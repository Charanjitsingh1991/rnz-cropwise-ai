'use client';

import { useState, useRef, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMobile } from '@/hooks/use-mobile';

interface CameraCaptureProps {
  onCapture: (imageData: string | File) => void;
  onError: (error: string) => void;
}

export function CameraCapture({ onCapture, onError }: CameraCaptureProps) {
  const { isMobile, isCapacitor } = useMobile();
  const [hasCamera, setHasCamera] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isCapacitor) {
      // For mobile app using Capacitor
      import('@capacitor/camera').then(({ Camera }) => {
        setHasCamera(true);
      }).catch(err => {
        console.error('Failed to load Capacitor Camera:', err);
        setHasCamera(false);
      });
    } else {
      // For web browser
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          setHasCamera(true);
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => {
          console.error('Camera access error:', err);
          setHasCamera(false);
        });
    }

    return () => {
      if (!isCapacitor && videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [isCapacitor]);

  const captureImage = async () => {
    try {
      if (isCapacitor) {
        // Mobile app camera capture
        const { Camera } = await import('@capacitor/camera');
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: 'base64',
          source: 'CAMERA'
        });
        
        onCapture(`data:image/${image.format};base64,${image.base64String}`);
      } else {
        // Web browser camera capture
        if (videoRef.current && canvasRef.current) {
          const video = videoRef.current;
          const canvas = canvasRef.current;
          
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          
          const context = canvas.getContext('2d');
          if (context) {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/jpeg', 0.9);
            onCapture(imageData);
          }
        }
      }
    } catch (error) {
      console.error('Image capture error:', error);
      onError('Failed to capture image. Please try again.');
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        onCapture(file);
      } else {
        onError('Please select an image file.');
      }
    }
  };

  return (
    <div className="space-y-4">
      {!isCapacitor && (
        <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
          <canvas ref={canvasRef} className="hidden" />
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-2">
        {hasCamera && (
          <Button
            onClick={captureImage}
            className="flex-1"
            variant="default"
          >
            <Camera className="mr-2 h-4 w-4" />
            {isCapacitor ? 'Take Photo' : 'Capture'}
          </Button>
        )}

        <div className="relative flex-1">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            Upload Photo
          </Button>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
}
