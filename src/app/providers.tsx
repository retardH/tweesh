'use client';
import { PropsWithChildren } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

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
      </NextThemesProvider>
    </>
  );
};
