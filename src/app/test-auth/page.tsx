'use client';

import { useSession } from 'next-auth/react';

export default function TestAuth() {
  const { data: session, status } = useSession();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Authentication Test</h1>
      
      <div className="space-y-4">
        <div>
          <strong>Status:</strong> {status}
        </div>
        
        <div>
          <strong>Has Session:</strong> {session ? 'Yes' : 'No'}
        </div>
        
        {session && (
          <div>
            <strong>User:</strong> {JSON.stringify(session.user, null, 2)}
          </div>
        )}
        
        <div>
          <strong>Full Session:</strong>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
