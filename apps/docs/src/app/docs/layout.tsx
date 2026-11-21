import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { ThemeToolbar } from '@/components/ThemeToolbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: 'Michael UI',
        children: <ThemeToolbar />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
