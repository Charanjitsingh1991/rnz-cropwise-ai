'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

export default function BrochureRequestsBadge() {
  const [pendingCount, setPendingCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPendingCount = async () => {
      try {
        const response = await fetch('/api/brochure-requests?status=pending');
        const data = await response.json();
        
        if (data.success) {
          setPendingCount(data.pagination?.total || 0);
        }
      } catch (error) {
        console.error('Error fetching pending requests count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingCount();
    
    // Refresh count every 30 seconds
    const interval = setInterval(fetchPendingCount, 30000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return null;
  }

  if (pendingCount === 0) {
    return null;
  }

  return (
    <Badge 
      variant="destructive" 
      className="ml-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
    >
      {pendingCount > 99 ? '99+' : pendingCount}
    </Badge>
  );
}
