'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Input,
  Segmented,
  Tag,
  Button,
  Flex,
  Tooltip,
  theme,
  Empty,
} from 'michael-ui';
import {
  SearchOutlined,
  CopyOutlined,
  CheckOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { DEMO_REGISTRY } from '@/demos/registry';

const CATEGORIES = [
  'All',
  'General',
  'Layout',
  'Navigation',
  'Data Entry',
  'Data Display',
  'Feedback',
  'Other',
];

export function ComponentsCatalog() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const { token } = theme.useToken();

  const handleCopy = (key: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const importCode = `import { ${DEMO_REGISTRY[key].title} } from 'michael-ui';`;
    navigator.clipboard.writeText(importCode);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const filteredComponents = useMemo(() => {
    const query = search.trim().toLowerCase();
    return Object.entries(DEMO_REGISTRY).filter(([key, item]) => {
      if (item.isSubDemo) return false;
      const matchCat =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        key.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });
  }, [search, selectedCategory]);

  return (
    <div style={{ marginTop: 24, marginBottom: 48 }}>
      {/* Controls: Search & Category Filters */}
      <Flex vertical gap="middle" style={{ marginBottom: 28 }}>
        <Input
          size="large"
          placeholder="Search 70+ components by name or keyword..."
          prefix={<SearchOutlined style={{ color: token.colorTextSecondary }} />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
          style={{ maxWidth: 500, width: '100%' }}
        />

        <div style={{ overflowX: 'auto', paddingBottom: 4 }}>
          <Segmented
            value={selectedCategory}
            onChange={(val) => setSelectedCategory(val as string)}
            options={CATEGORIES.map((cat) => {
              const rootDemos = Object.values(DEMO_REGISTRY).filter((d) => !d.isSubDemo);
              const count =
                cat === 'All'
                  ? rootDemos.length
                  : rootDemos.filter((d) => d.category === cat).length;
              return {
                label: `${cat} (${count})`,
                value: cat,
              };
            })}
          />
        </div>
      </Flex>

      {/* Grid of Components */}
      {filteredComponents.length === 0 ? (
        <Empty description="No components match your search filter." style={{ margin: '48px 0' }} />
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}
        >
          {filteredComponents.map(([key, item]) => {
            const DemoComponent = item.component;
            const isCopied = copiedKey === key;

            return (
              <div
                key={key}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: token.borderRadiusLG || 10,
                  border: `1px solid ${token.colorBorderSecondary}`,
                  background: token.colorBgContainer,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                {/* Header */}
                <div
                  style={{
                    padding: '14px 16px',
                    borderBottom: `1px solid ${token.colorBorderSecondary}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Link
                      href={`/docs/components/${key}`}
                      style={{
                        fontWeight: 600,
                        fontSize: 16,
                        color: token.colorText,
                        textDecoration: 'none',
                      }}
                    >
                      {item.title}
                    </Link>
                    <Tag color="blue" style={{ margin: 0, fontSize: 11 }}>
                      {item.category}
                    </Tag>
                  </div>
                  <Tooltip title={isCopied ? 'Import Copied!' : 'Copy import statement'}>
                    <Button
                      size="small"
                      type="text"
                      icon={isCopied ? <CheckOutlined style={{ color: '#52c41a' }} /> : <CopyOutlined />}
                      onClick={(e) => handleCopy(key, e)}
                    />
                  </Tooltip>
                </div>

                {/* Description */}
                <div
                  style={{
                    padding: '10px 16px 6px',
                    fontSize: 13,
                    color: token.colorTextSecondary,
                    minHeight: 44,
                  }}
                >
                  {item.description}
                </div>

                {/* Live Demo Container */}
                <div
                  style={{
                    flex: 1,
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: token.colorBgLayout,
                    minHeight: 110,
                    overflow: 'hidden',
                  }}
                >
                  <DemoComponent />
                </div>

                {/* Footer Link */}
                <div
                  style={{
                    padding: '10px 16px',
                    borderTop: `1px solid ${token.colorBorderSecondary}`,
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Link
                    href={`/docs/components/${key}`}
                    style={{
                      fontSize: 13,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      color: token.colorPrimary,
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    View Details & API <ArrowRightOutlined style={{ fontSize: 11 }} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
