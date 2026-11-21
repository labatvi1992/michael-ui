import './globals.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsThemeProvider } from '@/theme/ThemeContext';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Michael UI - Enterprise-class React UI Component Library',
  description: 'Modern, customizable React UI components built with pnpm, tsup, and dynamic theming.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <DocsThemeProvider>
          <RootProvider>
            {children}
          </RootProvider>
        </DocsThemeProvider>
      </body>
    </html>
  );
}
