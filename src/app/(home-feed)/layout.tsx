import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { PropsWithChildren } from 'react';

export default function HomeFeedLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto min-h-[100dvh] max-w-2xl bg-gray-200">
      <ClerkLoading>
        <div />
      </ClerkLoading>
      <ClerkLoaded>{children}</ClerkLoaded>
    </div>
  );
}
