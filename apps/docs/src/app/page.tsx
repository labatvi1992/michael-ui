'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Space, Typography, theme } from 'michael-ui';
import { ThemeToolbar } from '@/components/ThemeToolbar';
import { ComponentShowcase } from '@/components/ComponentShowcase';

const { Title, Paragraph } = Typography;

export default function HomePage() {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: token.colorBgLayout,
        color: token.colorText,
      }}
    >
      {/* Header */}
      <header
        style={{
          borderBottom: `1px solid ${token.colorBorderSecondary}`,
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backdropFilter: 'blur(8px)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: token.colorBgContainer,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: `linear-gradient(135deg, ${token.colorPrimary} 0%, #722ed1 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            M
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, color: token.colorTextHeading }}>Michael UI</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link href="/docs" style={{ textDecoration: 'none', color: token.colorText, fontWeight: 500 }}>
            Documentation
          </Link>
          <ThemeToolbar />
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ flex: 1, padding: '48px 24px', maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Title level={1} style={{ fontSize: 48, marginBottom: 16, color: token.colorTextHeading }}>
            Modern Enterprise React UI
          </Title>
          <Paragraph style={{ fontSize: 18, color: token.colorTextSecondary, maxWidth: 650, margin: '0 auto 32px' }}>
            Built on top of Ant Design, modernized with <strong>pnpm</strong> workspace, blazing-fast <strong>tsup</strong> build pipeline, and real-time <strong>Dynamic Theming</strong>.
          </Paragraph>

          <Space size="middle">
            <Link href="/docs">
              <Button type="primary" size="large">
                Get Started →
              </Button>
            </Link>
            <a href="https://github.com/labatvi1992/michael-ui" target="_blank" rel="noreferrer">
              <Button size="large">GitHub</Button>
            </a>
          </Space>
        </div>

        {/* Live Interactive Showcase */}
        <ComponentShowcase />
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: `1px solid ${token.colorBorderSecondary}`,
          padding: '24px',
          textAlign: 'center',
          color: token.colorTextTertiary,
          fontSize: 14,
          backgroundColor: token.colorBgContainer,
        }}
      >
        Michael UI © 2026. Released under the MIT License.
      </footer>
    </div>
  );
}
