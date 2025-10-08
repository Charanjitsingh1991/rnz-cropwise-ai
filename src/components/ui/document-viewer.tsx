'use client';

import { useState } from 'react';
import { Button } from './button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog';
import { FileText, Download, Eye, X } from 'lucide-react';

interface DocumentViewerProps {
  documents: string[];
  title: string;
  type: 'brochures' | 'certifications';
}

export function DocumentViewer({ documents, title, type }: DocumentViewerProps) {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  if (!documents || documents.length === 0) {
    return null;
  }

  const handleViewDocument = (docUrl: string) => {
    setSelectedDoc(docUrl);
    setIsViewerOpen(true);
  };

  const handleDownload = (docUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = docUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getFileName = (url: string) => {
    if (url.startsWith('file:')) {
      return url.replace('file:', '');
    }
    return url.split('/').pop() || 'Document';
  };

  const isPDF = (url: string) => {
    return url.toLowerCase().endsWith('.pdf');
  };

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-muted/50">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium truncate">
                {getFileName(doc)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleViewDocument(doc)}
                className="h-8 w-8 p-0"
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDownload(doc, getFileName(doc))}
                className="h-8 w-8 p-0"
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Document Viewer Dialog */}
      <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Viewing {getFileName(selectedDoc || '')}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsViewerOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          {selectedDoc && (
            <div className="flex-1 min-h-[60vh]">
              {isPDF(selectedDoc) ? (
                <iframe
                  src={selectedDoc}
                  className="w-full h-full min-h-[60vh] border rounded-md"
                  title={getFileName(selectedDoc)}
                />
              ) : (
                <div className="flex items-center justify-center h-full min-h-[60vh] border rounded-md bg-muted">
                  <div className="text-center">
                    <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Preview not available for this file type.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-2"
                      onClick={() => handleDownload(selectedDoc, getFileName(selectedDoc))}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download to View
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
