'use client';
import { PropsWithChildren } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import ThemeToggle from '@/components/shared/theme-toggle';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableSystem
      >
        {children}
        <div className="fixed right-2 top-2">
          <ThemeToggle />
        </div>
      </NextThemesProvider>
    </>
  );
};
