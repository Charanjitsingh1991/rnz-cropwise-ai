import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

interface PilotNoticeProps {
  className?: string;
}

export function PilotNotice({ className = '' }: PilotNoticeProps) {
  return (
    <Alert className={`border-green-200 bg-green-50 ${className}`}>
      <Info className="h-4 w-4 text-green-600" />
      <AlertDescription className="text-green-800">
        <strong>🌱 Regional Focus:</strong> Currently supporting India, Pakistan, Sri Lanka, Bangladesh, and GCC countries. 
        More regions will be added soon!
      </AlertDescription>
    </Alert>
  );
}
