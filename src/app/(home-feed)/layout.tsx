import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

export default function HomeFeedLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto min-h-[100dvh] max-w-xl">
      <ClerkLoading>
        <div />
      </ClerkLoading>
      <ClerkLoaded>
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
          }}
        />
      </ClerkLoaded>
    </div>
  );
}
