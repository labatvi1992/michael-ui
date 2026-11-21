'use client';

import React, { useState } from 'react';
import { Card, Segmented, Button, Tooltip, theme } from 'michael-ui';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';
import { DEMO_REGISTRY } from '@/demos/registry';

interface ComponentDemoProps {
  name: string;
}

export function ComponentDemo({ name }: ComponentDemoProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const { token } = theme.useToken();

  const demo = DEMO_REGISTRY[name];

  if (!demo) {
    return (
      <div
        style={{
          padding: 16,
          borderRadius: 8,
          border: '1px solid #ff4d4f',
          background: 'rgba(255, 77, 79, 0.05)',
          color: '#ff4d4f',
          margin: '16px 0',
        }}
      >
        Demo for component &quot;{name}&quot; not found in registry.
      </div>
    );
  }

  const DemoComponent = demo.component;

  const handleCopy = () => {
    navigator.clipboard.writeText(demo.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      style={{
        margin: '20px 0',
        borderRadius: token.borderRadiusLG || 10,
        border: `1px solid ${token.colorBorderSecondary}`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
        overflow: 'hidden',
      }}
      styles={{
        header: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${token.colorBorderSecondary}`,
          padding: '12px 16px',
        },
        body: {
          padding: 0,
        },
      }}
      title={
        <span style={{ fontSize: 15, fontWeight: 600 }}>
          {demo.title} Live Demo
        </span>
      }
      extra={
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Segmented
            size="small"
            value={tab}
            onChange={(val) => setTab(val as 'preview' | 'code')}
            options={[
              { label: 'Preview', value: 'preview' },
              { label: 'Code', value: 'code' },
            ]}
          />
          <Tooltip title={copied ? 'Copied!' : 'Copy Code'}>
            <Button
              size="small"
              type="text"
              icon={copied ? <CheckOutlined style={{ color: '#52c41a' }} /> : <CopyOutlined />}
              onClick={handleCopy}
            />
          </Tooltip>
        </div>
      }
    >
      {tab === 'preview' ? (
        <div
          style={{
            padding: 28,
            minHeight: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: token.colorBgContainer,
          }}
        >
          <DemoComponent />
        </div>
      ) : (
        <div
          style={{
            padding: 16,
            background: token.colorBgLayout,
            overflowX: 'auto',
          }}
        >
          <pre
            style={{
              margin: 0,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              fontSize: 13,
              lineHeight: 1.6,
            }}
          >
            <code>{demo.code}</code>
          </pre>
        </div>
      )}
    </Card>
  );
}
