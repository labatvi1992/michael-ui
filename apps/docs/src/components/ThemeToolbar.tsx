'use client';

import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { useDocsTheme } from '../theme/ThemeContext';
import { Button, Popover, Radio, Slider, Switch, Tooltip } from 'michael-ui';

const PRESET_COLORS = [
  { name: 'Blue', value: '#1677ff' },
  { name: 'Purple', value: '#722ed1' },
  { name: 'Green', value: '#52c41a' },
  { name: 'Orange', value: '#fa8c16' },
  { name: 'Red', value: '#f5222d' },
  { name: 'Cyan', value: '#13c2c2' },
];

export function ThemeToolbar() {
  const { themeState, setIsDark, setIsCompact, setColorPrimary, setBorderRadius, resetTheme } = useDocsTheme();
  const [copied, setCopied] = useState(false);

  const copyConfig = () => {
    const config = {
      theme: {
        algorithm: themeState.isDark ? 'theme.darkAlgorithm' : 'theme.defaultAlgorithm',
        compact: themeState.isCompact,
        token: {
          colorPrimary: themeState.colorPrimary,
          borderRadius: themeState.borderRadius,
        },
      },
    };
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const themePopoverContent = (
    <div style={{ width: 280, display: 'flex', flexDirection: 'column', gap: 16, padding: '8px 4px' }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Theme Mode</div>
        <Radio.Group
          value={themeState.isDark ? 'dark' : 'light'}
          onChange={(e) => setIsDark(e.target.value === 'dark')}
          size="small"
        >
          <Radio.Button value="light">☀️ Light</Radio.Button>
          <Radio.Button value="dark">🌙 Dark</Radio.Button>
        </Radio.Group>
      </div>

      <div>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
          <span>Compact Density</span>
          <Switch
            size="small"
            checked={themeState.isCompact}
            onChange={setIsCompact}
          />
        </div>
      </div>

      <div>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Primary Color</div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          {PRESET_COLORS.map((color) => (
            <Tooltip key={color.name} title={color.name}>
              <button
                type="button"
                onClick={() => setColorPrimary(color.value)}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: color.value,
                  border: themeState.colorPrimary === color.value ? '2px solid #fff' : 'none',
                  outline: themeState.colorPrimary === color.value ? `2px solid ${color.value}` : 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            </Tooltip>
          ))}
          <input
            type="color"
            value={themeState.colorPrimary}
            onChange={(e) => setColorPrimary(e.target.value)}
            style={{
              width: 26,
              height: 26,
              padding: 0,
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              background: 'transparent',
            }}
            title="Custom Color"
          />
        </div>
      </div>

      <div>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, display: 'flex', justifyContent: 'space-between' }}>
          <span>Border Radius</span>
          <span style={{ fontSize: 12, opacity: 0.7 }}>{themeState.borderRadius}px</span>
        </div>
        <Slider
          min={0}
          max={16}
          value={themeState.borderRadius}
          onChange={setBorderRadius}
        />
      </div>

      <div style={{ display: 'flex', gap: 8, paddingTop: 4, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <Button size="small" onClick={copyConfig} style={{ flex: 1 }}>
          {copied ? '✓ Copied!' : 'Copy Config'}
        </Button>
        <Button size="small" onClick={resetTheme}>
          Reset
        </Button>
      </div>
    </div>
  );

  return (
    <Popover content={themePopoverContent} title="🎨 Theme Customizer" trigger="click" placement="bottomRight">
      <Tooltip title="Theme Customizer">
        <Button
          type="text"
          shape="circle"
          icon={<Palette size={18} style={{ verticalAlign: 'middle' }} />}
          aria-label="Theme Customizer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </Tooltip>
    </Popover>
  );
}
