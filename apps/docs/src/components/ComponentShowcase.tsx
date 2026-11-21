'use client';

import React, { useState } from 'react';
import {
  Alert,
  Badge,
  Button,
  Card,
  Divider,
  Input,
  Progress,
  Rate,
  Slider,
  Space,
  Switch,
  Tag,
} from 'michael-ui';

export function ComponentShowcase() {
  const [sliderVal, setSliderVal] = useState(65);
  const [switchVal, setSwitchVal] = useState(true);
  const [rateVal, setRateVal] = useState(4);

  return (
    <Card
      title="🚀 Live Components Playground"
      style={{
        maxWidth: 900,
        margin: '0 auto',
        boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
      }}
    >
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Alert
          title="Reactive Theme Demo"
          description="Use the 'Theme Customizer' in the header to change Dark/Light mode, Compact density, primary color, or border-radius. Watch all components adapt live!"
          type="info"
          showIcon
        />

        <div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Buttons</div>
          <Space wrap>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="link">Link Button</Button>
            <Button type="primary" danger>
              Danger Primary
            </Button>
          </Space>
        </div>

        <Divider style={{ margin: '12px 0' }} />

        <div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Tags & Badges</div>
          <Space wrap size="middle">
            <Tag color="processing">Processing</Tag>
            <Tag color="success">Success</Tag>
            <Tag color="warning">Warning</Tag>
            <Tag color="error">Error</Tag>
            <Badge count={5}>
              <Button>Messages</Button>
            </Badge>
            <Badge status="processing" text="Active User" />
          </Space>
        </div>

        <Divider style={{ margin: '12px 0' }} />

        <div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Interactive Controls</div>
          <Space orientation="vertical" style={{ width: '100%' }} size="middle">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ minWidth: 100 }}>Switch & Rate:</span>
              <Switch checked={switchVal} onChange={setSwitchVal} />
              <Rate value={rateVal} onChange={setRateVal} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ minWidth: 100 }}>Progress ({sliderVal}%):</span>
              <div style={{ flex: 1 }}>
                <Progress percent={sliderVal} status="active" />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ minWidth: 100 }}>Slider:</span>
              <div style={{ flex: 1 }}>
                <Slider value={sliderVal} onChange={setSliderVal} />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ minWidth: 100 }}>Input:</span>
              <Input placeholder="Type something here..." style={{ maxWidth: 320 }} allowClear />
            </div>
          </Space>
        </div>
      </Space>
    </Card>
  );
}
