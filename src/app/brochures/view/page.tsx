'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function BrochureViewer() {
    const searchParams = useSearchParams();
    const url = searchParams.get('url');
    const title = url?.split('/').pop()?.replace('.pdf', '') || 'Brochure';

    if (!url) {
        return (
            <div className="flex items-center justify-center h-full text-red-500">
                Brochure URL not found. Please go back and try again.
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            <header className="flex items-center justify-between p-4 border-b bg-card">
                <Button variant="outline" asChild>
                    <Link href="/brochures"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Brochures</Link>
                </Button>
                <h1 className="text-xl font-semibold truncate flex-1 text-center">{title}</h1>
                <Button asChild>
                    <a href={url} download>
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                    </a>
                </Button>
            </header>
            <div className="flex-1">
                 <iframe src={url} className="w-full h-full" title={title} />
            </div>
        </div>
    );
}


export default function ViewBrochurePage() {
    return (
        <main className="flex-1 overflow-hidden">
            <Suspense fallback={<div className="flex items-center justify-center h-full">Loading...</div>}>
                <BrochureViewer />
            </Suspense>
        </main>
    )
}
