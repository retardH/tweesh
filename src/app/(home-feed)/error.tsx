'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}
const Error = ({ error }: ErrorPageProps) => {
  useEffect(() => {
    console.log('error: ', error);
  }, [error]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-medium lg:text-2xl">Something went wrong!</h2>
      <Link href="/">
        <Button variant="default">Try Again</Button>
      </Link>
    </div>
  );
};

export default Error;
