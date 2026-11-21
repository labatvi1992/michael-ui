'use client';

import React, { useState } from 'react';
import {
  Affix,
  Alert,
  Anchor,
  App,
  AutoComplete,
  Avatar,
  Badge,
  BorderBeam,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  Collapse,
  ColorPicker,
  ConfigProvider,
  DatePicker,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Flex,
  FloatButton,
  Form,
  Image,
  Input,
  InputNumber,
  Layout,
  List,
  Mentions,
  Menu,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  QRCode,
  Radio,
  Rate,
  Result,
  Row,
  Segmented,
  Select,
  Skeleton,
  Slider,
  Space,
  Spin,
  Splitter,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Tour,
  Transfer,
  Tree,
  TreeSelect,
  Typography,
  Upload,
  Watermark,
  message,
  notification,
} from 'michael-ui';

import {
  AppstoreOutlined,
  CheckOutlined,
  CloseOutlined,
  DownOutlined,
  HeartOutlined,
  InboxOutlined,
  MailOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  SmileOutlined,
  StarOutlined,
  SyncOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons';

export interface DemoItem {
  title: string;
  category: string;
  description: string;
  component: React.FC;
  code: string;
  isSubDemo?: boolean;
}

const BASE_DEMOS: Record<string, DemoItem> = {
  // ================= GENERAL =================
  button: {
    title: 'Button',
    category: 'General',
    description: 'To trigger an operation with primary, default, dashed, link, and danger variants.',
    component: () => {
      const [loading, setLoading] = useState(false);
      return (
        <Flex vertical gap="middle">
          <Flex gap="small" wrap>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="link">Link</Button>
          </Flex>
          <Flex gap="small" wrap>
            <Button type="primary" danger>
              Danger Primary
            </Button>
            <Button danger>Danger Default</Button>
            <Button
              type="primary"
              loading={loading}
              onClick={() => {
                setLoading(true);
                setTimeout(() => setLoading(false), 2000);
              }}
            >
              {loading ? 'Submitting...' : 'Click to Load'}
            </Button>
          </Flex>
        </Flex>
      );
    },
    code: `import { Button, Flex } from 'michael-ui';

export default () => (
  <Flex gap="small" wrap>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="primary" danger>Danger</Button>
  </Flex>
);`,
  },

  'float-button': {
    title: 'FloatButton',
    category: 'General',
    description: 'A floating button to provide quick, omnipresent actions on the page.',
    component: () => (
      <Space size="large">
        <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ position: 'relative', top: 0, right: 0 }} />
        <FloatButton icon={<HeartOutlined />} style={{ position: 'relative', top: 0, right: 0 }} />
        <FloatButton.Group shape="circle" style={{ position: 'relative', top: 0, right: 0 }}>
          <FloatButton icon={<SyncOutlined />} />
          <FloatButton.BackTop visibilityHeight={0} style={{ position: 'relative', top: 0, right: 0 }} />
        </FloatButton.Group>
      </Space>
    ),
    code: `import { FloatButton } from 'michael-ui';
import { QuestionCircleOutlined } from '@ant-design/icons';

export default () => (
  <FloatButton.Group shape="circle">
    <FloatButton icon={<QuestionCircleOutlined />} />
    <FloatButton.BackTop />
  </FloatButton.Group>
);`,
  },

  icon: {
    title: 'Icon',
    category: 'General',
    description: 'Semantic vector icons powered by Ant Design Icon system.',
    component: () => (
      <Flex gap="middle" wrap align="center">
        <SearchOutlined style={{ fontSize: 24, color: '#1677ff' }} />
        <UserOutlined style={{ fontSize: 24, color: '#52c41a' }} />
        <SettingOutlined style={{ fontSize: 24, color: '#faad14' }} />
        <SmileOutlined style={{ fontSize: 24, color: '#eb2f96' }} />
        <SyncOutlined spin style={{ fontSize: 24, color: '#722ed1' }} />
        <HeartOutlined style={{ fontSize: 24, color: '#f5222d' }} />
      </Flex>
    ),
    code: `import { SearchOutlined, UserOutlined, SettingOutlined, SyncOutlined } from '@ant-design/icons';

export default () => (
  <div style={{ display: 'flex', gap: 16 }}>
    <SearchOutlined style={{ fontSize: 24 }} />
    <UserOutlined style={{ fontSize: 24 }} />
    <SettingOutlined style={{ fontSize: 24 }} />
    <SyncOutlined spin style={{ fontSize: 24 }} />
  </div>
);`,
  },

  typography: {
    title: 'Typography',
    category: 'General',
    description: 'Basic text writing, including headings, body text, lists, and copyable text.',
    component: () => (
      <Typography>
        <Typography.Title level={4}>Michael UI Typography</Typography.Title>
        <Typography.Paragraph>
          A robust typography system built for clean reading and enterprise application workflows.
        </Typography.Paragraph>
        <Typography.Text type="secondary">Secondary text</Typography.Text> |{' '}
        <Typography.Text mark>Mark text</Typography.Text> |{' '}
        <Typography.Text code>npm i michael-ui</Typography.Text> |{' '}
        <Typography.Text copyable>Copyable content</Typography.Text>
      </Typography>
    ),
    code: `import { Typography } from 'michael-ui';

export default () => (
  <Typography>
    <Typography.Title level={4}>Michael UI</Typography.Title>
    <Typography.Paragraph>High performance enterprise UI library.</Typography.Paragraph>
    <Typography.Text copyable>npm install michael-ui</Typography.Text>
  </Typography>
);`,
  },

  // ================= LAYOUT =================
  divider: {
    title: 'Divider',
    category: 'Layout',
    description: 'A divider line separates different content areas.',
    component: () => (
      <div style={{ width: '100%' }}>
        <p>Section above</p>
        <Divider>Section Title</Divider>
        <p>Section below</p>
        <Divider titlePlacement="left">Left Aligned</Divider>
        <p>Another section</p>
        <Divider dashed>Dashed Divider</Divider>
      </div>
    ),
    code: `import { Divider } from 'michael-ui';

export default () => (
  <div>
    <p>Top section</p>
    <Divider>Centered Label</Divider>
    <p>Bottom section</p>
  </div>
);`,
  },

  flex: {
    title: 'Flex',
    category: 'Layout',
    description: 'Flex layout component for positioning and responsive spacing.',
    component: () => (
      <Flex gap="middle" wrap justify="space-between" align="center" style={{ width: '100%' }}>
        <Button type="primary">Item 1</Button>
        <Button>Item 2</Button>
        <Button type="dashed">Item 3</Button>
        <Button>Item 4</Button>
      </Flex>
    ),
    code: `import { Flex, Button } from 'michael-ui';

export default () => (
  <Flex gap="middle" justify="space-between" align="center">
    <Button type="primary">Item 1</Button>
    <Button>Item 2</Button>
    <Button>Item 3</Button>
  </Flex>
);`,
  },

  grid: {
    title: 'Grid',
    category: 'Layout',
    description: '24-column flexbox responsive grid system.',
    component: () => (
      <Row gutter={[16, 16]} style={{ width: '100%' }}>
        <Col span={6}>
          <div style={{ background: '#1677ff', color: '#fff', padding: '12px 0', textAlign: 'center', borderRadius: 6 }}>
            col-6
          </div>
        </Col>
        <Col span={6}>
          <div style={{ background: '#1677ff', color: '#fff', padding: '12px 0', textAlign: 'center', borderRadius: 6 }}>
            col-6
          </div>
        </Col>
        <Col span={6}>
          <div style={{ background: '#1677ff', color: '#fff', padding: '12px 0', textAlign: 'center', borderRadius: 6 }}>
            col-6
          </div>
        </Col>
        <Col span={6}>
          <div style={{ background: '#1677ff', color: '#fff', padding: '12px 0', textAlign: 'center', borderRadius: 6 }}>
            col-6
          </div>
        </Col>
      </Row>
    ),
    code: `import { Row, Col } from 'michael-ui';

export default () => (
  <Row gutter={[16, 16]}>
    <Col span={12}>Span 12</Col>
    <Col span={12}>Span 12</Col>
  </Row>
);`,
  },

  layout: {
    title: 'Layout',
    category: 'Layout',
    description: 'Handling the overall layout of an application page (Header, Sider, Content, Footer).',
    component: () => (
      <Layout style={{ borderRadius: 8, overflow: 'hidden', width: '100%' }}>
        <Layout.Header style={{ color: '#fff', textAlign: 'center', background: '#7dbcea' }}>
          Header
        </Layout.Header>
        <Layout.Content style={{ padding: 24, textAlign: 'center', background: 'rgba(16, 142, 233, 1)', color: '#fff' }}>
          Content
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center', background: '#7dbcea', color: '#fff' }}>
          Footer
        </Layout.Footer>
      </Layout>
    ),
    code: `import { Layout } from 'michael-ui';

export default () => (
  <Layout>
    <Layout.Header>Header</Layout.Header>
    <Layout.Content>Content</Layout.Content>
    <Layout.Footer>Footer</Layout.Footer>
  </Layout>
);`,
  },

  space: {
    title: 'Space',
    category: 'Layout',
    description: 'Set components margin with uniform spacing.',
    component: () => (
      <Space wrap size="middle">
        <Button type="primary">Button 1</Button>
        <Button>Button 2</Button>
        <Button type="dashed">Button 3</Button>
        <Tag color="blue">Space Tag</Tag>
        <Switch defaultChecked />
      </Space>
    ),
    code: `import { Space, Button } from 'michael-ui';

export default () => (
  <Space size="middle" wrap>
    <Button type="primary">Button 1</Button>
    <Button>Button 2</Button>
  </Space>
);`,
  },

  splitter: {
    title: 'Splitter',
    category: 'Layout',
    description: 'A resizable panel split container for multi-pane layouts.',
    component: () => (
      <Splitter style={{ height: 120, border: '1px solid #d9d9d9', borderRadius: 8, width: '100%' }}>
        <Splitter.Panel defaultSize="40%" min="20%" max="70%">
          <div style={{ padding: 12 }}>Left Resizable Panel</div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div style={{ padding: 12 }}>Right Panel</div>
        </Splitter.Panel>
      </Splitter>
    ),
    code: `import { Splitter } from 'michael-ui';

export default () => (
  <Splitter style={{ height: 160 }}>
    <Splitter.Panel defaultSize="50%">Panel 1</Splitter.Panel>
    <Splitter.Panel>Panel 2</Splitter.Panel>
  </Splitter>
);`,
  },

  // ================= NAVIGATION =================
  affix: {
    title: 'Affix',
    category: 'Navigation',
    description: 'Wrap an element to make it stick to the viewport at a fixed position.',
    component: () => (
      <Affix offsetTop={20}>
        <Button type="primary">Affixed Button (Top 20px)</Button>
      </Affix>
    ),
    code: `import { Affix, Button } from 'michael-ui';

export default () => (
  <Affix offsetTop={100}>
    <Button type="primary">Fixed at top</Button>
  </Affix>
);`,
  },

  anchor: {
    title: 'Anchor',
    category: 'Navigation',
    description: 'Hyperlinks to navigate to specific sections on the page.',
    component: () => (
      <Anchor
        items={[
          { key: 'part-1', href: '#usage', title: 'Usage' },
          { key: 'part-2', href: '#examples', title: 'Examples' },
          { key: 'part-3', href: '#api', title: 'API' },
        ]}
      />
    ),
    code: `import { Anchor } from 'michael-ui';

export default () => (
  <Anchor
    items={[
      { key: '1', href: '#section-1', title: 'Section 1' },
      { key: '2', href: '#section-2', title: 'Section 2' },
    ]}
  />
);`,
  },

  breadcrumb: {
    title: 'Breadcrumb',
    category: 'Navigation',
    description: 'A list of links that help visualize the page location within a hierarchical tree.',
    component: () => (
      <Breadcrumb
        items={[
          { title: 'Home' },
          { title: <a href="#app">Applications</a> },
          { title: 'Michael UI' },
        ]}
      />
    ),
    code: `import { Breadcrumb } from 'michael-ui';

export default () => (
  <Breadcrumb
    items={[
      { title: 'Home' },
      { title: 'Components' },
      { title: 'Breadcrumb' },
    ]}
  />
);`,
  },

  dropdown: {
    title: 'Dropdown',
    category: 'Navigation',
    description: 'A dropdown list of actions triggered by click or hover.',
    component: () => (
      <Dropdown
        menu={{
          items: [
            { key: '1', label: '1st Menu Item' },
            { key: '2', label: '2nd Menu Item' },
            { key: '3', label: '3rd Menu Item', danger: true },
          ],
        }}
      >
        <Button>
          Hover for Dropdown <DownOutlined />
        </Button>
      </Dropdown>
    ),
    code: `import { Dropdown, Button } from 'michael-ui';
import { DownOutlined } from '@ant-design/icons';

export default () => (
  <Dropdown menu={{ items: [{ key: '1', label: 'Option 1' }] }}>
    <Button>Actions <DownOutlined /></Button>
  </Dropdown>
);`,
  },

  menu: {
    title: 'Menu',
    category: 'Navigation',
    description: 'Navigation menu for horizontal navigation bars or vertical sidebars.',
    component: () => (
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{ width: '100%' }}
        items={[
          { key: 'home', label: 'Home', icon: <MailOutlined /> },
          { key: 'apps', label: 'Applications', icon: <AppstoreOutlined /> },
          { key: 'settings', label: 'Settings', icon: <SettingOutlined /> },
        ]}
      />
    ),
    code: `import { Menu } from 'michael-ui';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';

export default () => (
  <Menu
    mode="horizontal"
    defaultSelectedKeys={['mail']}
    items={[
      { key: 'mail', label: 'Mail', icon: <MailOutlined /> },
      { key: 'app', label: 'App', icon: <AppstoreOutlined /> },
    ]}
  />
);`,
  },

  pagination: {
    title: 'Pagination',
    category: 'Navigation',
    description: 'A long list can be divided into several pages using Pagination.',
    component: () => <Pagination defaultCurrent={2} total={500} showSizeChanger />,
    code: `import { Pagination } from 'michael-ui';

export default () => <Pagination defaultCurrent={1} total={50} />;`,
  },

  steps: {
    title: 'Steps',
    category: 'Navigation',
    description: 'A navigation bar that guides users through the steps of a task sequence.',
    component: () => (
      <Steps
        current={1}
        items={[
          { title: 'Finished', description: 'Step 1 complete' },
          { title: 'In Progress', description: 'Step 2 active' },
          { title: 'Waiting', description: 'Step 3 pending' },
        ]}
      />
    ),
    code: `import { Steps } from 'michael-ui';

export default () => (
  <Steps
    current={1}
    items={[
      { title: 'Step 1' },
      { title: 'Step 2' },
      { title: 'Step 3' },
    ]}
  />
);`,
  },

  // ================= DATA ENTRY =================
  'auto-complete': {
    title: 'AutoComplete',
    category: 'Data Entry',
    description: 'Autocomplete input component with suggestion dropdown.',
    component: () => (
      <AutoComplete
        options={[{ value: 'Burns Bay Road' }, { value: 'Downing Street' }, { value: 'Wall Street' }]}
        style={{ width: 240 }}
        placeholder="Type street name..."
      />
    ),
    code: `import { AutoComplete } from 'michael-ui';

export default () => (
  <AutoComplete
    options={[{ value: 'Apple' }, { value: 'Banana' }]}
    style={{ width: 200 }}
    placeholder="Search fruit..."
  />
);`,
  },

  cascader: {
    title: 'Cascader',
    category: 'Data Entry',
    description: 'Cascade selection allows selection from a hierarchical set of options.',
    component: () => (
      <Cascader
        options={[
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{ value: 'hangzhou', label: 'Hangzhou' }, { value: 'ningbo', label: 'Ningbo' }],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{ value: 'nanjing', label: 'Nanjing' }, { value: 'suzhou', label: 'Suzhou' }],
          },
        ]}
        placeholder="Select location"
        style={{ width: 240 }}
      />
    ),
    code: `import { Cascader } from 'michael-ui';

export default () => (
  <Cascader
    options={[{ value: 'us', label: 'USA', children: [{ value: 'ca', label: 'California' }] }]}
    placeholder="Select region"
  />
);`,
  },

  checkbox: {
    title: 'Checkbox',
    category: 'Data Entry',
    description: 'Checkbox component for binary state selection or multi-option groups.',
    component: () => (
      <Flex vertical gap="small">
        <Checkbox defaultChecked>Subscribe to newsletter</Checkbox>
        <Checkbox.Group
          options={['React', 'Next.js', 'TypeScript', 'Turborepo']}
          defaultValue={['React', 'TypeScript']}
        />
      </Flex>
    ),
    code: `import { Checkbox } from 'michael-ui';

export default () => (
  <Checkbox.Group options={['A', 'B', 'C']} defaultValue={['A']} />
);`,
  },

  'color-picker': {
    title: 'ColorPicker',
    category: 'Data Entry',
    description: 'ColorPicker component for selecting and custom palette management.',
    component: () => (
      <Flex gap="middle" align="center">
        <ColorPicker defaultValue="#1677ff" showText />
        <ColorPicker defaultValue="#52c41a" showText />
        <ColorPicker defaultValue="#722ed1" showText />
      </Flex>
    ),
    code: `import { ColorPicker } from 'michael-ui';

export default () => <ColorPicker defaultValue="#1677ff" showText />;`,
  },

  'date-picker': {
    title: 'DatePicker',
    category: 'Data Entry',
    description: 'To select or input a date, date range, or time.',
    component: () => (
      <Flex gap="middle" wrap>
        <DatePicker placeholder="Select date" />
        <DatePicker.RangePicker />
      </Flex>
    ),
    code: `import { DatePicker } from 'michael-ui';

export default () => (
  <>
    <DatePicker />
    <DatePicker.RangePicker />
  </>
);`,
  },

  form: {
    title: 'Form',
    category: 'Data Entry',
    description: 'High performance Form component with data-binding and validation.',
    component: () => (
      <Form name="demo-form" layout="vertical" style={{ maxWidth: 360, width: '100%' }}>
        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input username!' }]}>
          <Input placeholder="Enter username" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input password!' }]}>
          <Input.Password placeholder="Enter password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    ),
    code: `import { Form, Input, Button } from 'michael-ui';

export default () => (
  <Form layout="vertical">
    <Form.Item label="Email" name="email">
      <Input placeholder="email@example.com" />
    </Form.Item>
    <Button type="primary">Submit</Button>
  </Form>
);`,
  },

  input: {
    title: 'Input',
    category: 'Data Entry',
    description: 'A basic widget for getting the user input is a text field.',
    component: () => (
      <Flex vertical gap="small" style={{ maxWidth: 360, width: '100%' }}>
        <Input placeholder="Basic input" allowClear prefix={<UserOutlined />} />
        <Input.Password placeholder="Password input" />
        <Input.Search placeholder="Search docs..." enterButton />
      </Flex>
    ),
    code: `import { Input } from 'michael-ui';

export default () => (
  <Input placeholder="Search..." allowClear />
);`,
  },

  'input-number': {
    title: 'InputNumber',
    category: 'Data Entry',
    description: 'Enter a number within certain range with the mouse or keyboard.',
    component: () => <InputNumber min={1} max={100} defaultValue={10} prefix="$" />,
    code: `import { InputNumber } from 'michael-ui';

export default () => <InputNumber min={1} max={10} defaultValue={3} />;`,
  },

  mentions: {
    title: 'Mentions',
    category: 'Data Entry',
    description: 'Mention component used in comments or chats to @ someone.',
    component: () => (
      <Mentions
        style={{ width: '100%', maxWidth: 360 }}
        defaultValue="@michael-ui"
        options={[
          { value: 'michael-ui', label: 'michael-ui' },
          { value: 'react', label: 'react' },
          { value: 'ant-design', label: 'ant-design' },
        ]}
      />
    ),
    code: `import { Mentions } from 'michael-ui';

export default () => (
  <Mentions options={[{ value: 'admin', label: 'admin' }]} />
);`,
  },

  radio: {
    title: 'Radio',
    category: 'Data Entry',
    description: 'Used to select a single state from multiple options.',
    component: () => (
      <Flex vertical gap="small">
        <Radio.Group defaultValue="apple">
          <Radio value="apple">Apple</Radio>
          <Radio value="pear">Pear</Radio>
          <Radio value="orange">Orange</Radio>
        </Radio.Group>
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
        </Radio.Group>
      </Flex>
    ),
    code: `import { Radio } from 'michael-ui';

export default () => (
  <Radio.Group defaultValue="1">
    <Radio value="1">Option 1</Radio>
    <Radio value="2">Option 2</Radio>
  </Radio.Group>
);`,
  },

  rate: {
    title: 'Rate',
    category: 'Data Entry',
    description: 'Rate component for user ratings and feedback evaluation.',
    component: () => <Rate defaultValue={4} allowHalf />,
    code: `import { Rate } from 'michael-ui';

export default () => <Rate defaultValue={3.5} allowHalf />;`,
  },

  select: {
    title: 'Select',
    category: 'Data Entry',
    description: 'Select component to select value from options dropdown.',
    component: () => (
      <Flex gap="middle" wrap>
        <Select
          defaultValue="react"
          style={{ width: 140 }}
          options={[
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'angular', label: 'Angular' },
          ]}
        />
        <Select
          mode="multiple"
          defaultValue={['esm', 'cjs']}
          style={{ width: 220 }}
          options={[
            { value: 'esm', label: 'ESM Module' },
            { value: 'cjs', label: 'CommonJS' },
            { value: 'dts', label: 'TypeScript Types' },
          ]}
        />
      </Flex>
    ),
    code: `import { Select } from 'michael-ui';

export default () => (
  <Select
    defaultValue="opt1"
    options={[{ value: 'opt1', label: 'Option 1' }]}
  />
);`,
  },

  slider: {
    title: 'Slider',
    category: 'Data Entry',
    description: 'A Slider component for displaying current value and intervals.',
    component: () => (
      <div style={{ maxWidth: 360, width: '100%' }}>
        <Slider defaultValue={35} />
        <Slider range defaultValue={[20, 70]} />
      </div>
    ),
    code: `import { Slider } from 'michael-ui';

export default () => <Slider defaultValue={30} />;`,
  },

  switch: {
    title: 'Switch',
    category: 'Data Entry',
    description: 'Switching between two states: on and off.',
    component: () => (
      <Flex gap="middle" align="center">
        <Switch defaultChecked />
        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
        <Switch loading defaultChecked />
      </Flex>
    ),
    code: `import { Switch } from 'michael-ui';

export default () => <Switch defaultChecked />;`,
  },

  'time-picker': {
    title: 'TimePicker',
    category: 'Data Entry',
    description: 'To select or input a specific time.',
    component: () => <TimePicker placeholder="Select time" />,
    code: `import { TimePicker } from 'michael-ui';

export default () => <TimePicker />;`,
  },

  transfer: {
    title: 'Transfer',
    category: 'Data Entry',
    description: 'Double column transfer choice box for moving elements between two lists.',
    component: () => (
      <Transfer
        dataSource={[
          { key: '1', title: 'Content 1', description: 'Item 1' },
          { key: '2', title: 'Content 2', description: 'Item 2' },
          { key: '3', title: 'Content 3', description: 'Item 3' },
        ]}
        targetKeys={['1']}
        render={(item) => item.title}
        titles={['Source', 'Target']}
      />
    ),
    code: `import { Transfer } from 'michael-ui';

export default () => (
  <Transfer
    dataSource={[{ key: '1', title: 'Item 1' }]}
    targetKeys={['1']}
    render={i => i.title}
  />
);`,
  },

  'tree-select': {
    title: 'TreeSelect',
    category: 'Data Entry',
    description: 'Tree selection control for tree structure dropdown selection.',
    component: () => (
      <TreeSelect
        showSearch
        style={{ width: 240 }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select node"
        treeDefaultExpandAll
        treeData={[
          {
            title: 'Node 1',
            value: '0-0',
            children: [{ title: 'Child 1', value: '0-0-1' }],
          },
          { title: 'Node 2', value: '0-1' },
        ]}
      />
    ),
    code: `import { TreeSelect } from 'michael-ui';

export default () => (
  <TreeSelect
    treeData={[{ title: 'Parent', value: '1', children: [{ title: 'Child', value: '2' }] }]}
    style={{ width: 200 }}
  />
);`,
  },

  upload: {
    title: 'Upload',
    category: 'Data Entry',
    description: 'Upload file by selecting or dragging files.',
    component: () => (
      <Upload>
        <Button icon={<UploadOutlined />}>Click to Upload File</Button>
      </Upload>
    ),
    code: `import { Upload, Button } from 'michael-ui';
import { UploadOutlined } from '@ant-design/icons';

export default () => (
  <Upload>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
);`,
  },

  // ================= DATA DISPLAY =================
  avatar: {
    title: 'Avatar',
    category: 'Data Display',
    description: 'Avatars can be used to represent people or objects.',
    component: () => (
      <Space size="middle">
        <Avatar icon={<UserOutlined />} />
        <Avatar style={{ backgroundColor: '#f56a00' }}>M</Avatar>
        <Avatar style={{ backgroundColor: '#7265e6' }}>UI</Avatar>
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
        <Badge count={1}>
          <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
      </Space>
    ),
    code: `import { Avatar } from 'michael-ui';
import { UserOutlined } from '@ant-design/icons';

export default () => (
  <Avatar icon={<UserOutlined />} />
);`,
  },

  badge: {
    title: 'Badge',
    category: 'Data Display',
    description: 'Small badge for numbers or status indicators on elements.',
    component: () => (
      <Space size="large">
        <Badge count={5}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge count={99} overflowCount={10}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge dot>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge status="processing" text="Online" />
        <Badge status="success" text="Ready" />
      </Space>
    ),
    code: `import { Badge, Button } from 'michael-ui';

export default () => (
  <Badge count={5}>
    <Button>Inbox</Button>
  </Badge>
);`,
  },

  calendar: {
    title: 'Calendar',
    category: 'Data Display',
    description: 'Container for displaying data in calendar format.',
    component: () => (
      <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 8 }}>
        <Calendar fullscreen={false} />
      </div>
    ),
    code: `import { Calendar } from 'michael-ui';

export default () => <Calendar fullscreen={false} />;`,
  },

  card: {
    title: 'Card',
    category: 'Data Display',
    description: 'Simple rectangular container for grouping related content.',
    component: () => (
      <Card title="Michael UI Card" extra={<a href="#">More</a>} style={{ maxWidth: 360, width: '100%' }}>
        <p>Enterprise React Component Library</p>
        <p>Dual ESM/CJS build with Turborepo & tsup.</p>
      </Card>
    ),
    code: `import { Card } from 'michael-ui';

export default () => (
  <Card title="Card Title">
    <p>Card Content</p>
  </Card>
);`,
  },

  carousel: {
    title: 'Carousel',
    category: 'Data Display',
    description: 'A carousel component. Scales with its container.',
    component: () => (
      <div style={{ maxWidth: 400, width: '100%' }}>
        <Carousel autoplay>
          <div style={{ height: 120, lineHeight: '120px', textAlign: 'center', background: '#364d79', color: '#fff' }}>
            <h3>Slide 1</h3>
          </div>
          <div style={{ height: 120, lineHeight: '120px', textAlign: 'center', background: '#1677ff', color: '#fff' }}>
            <h3>Slide 2</h3>
          </div>
        </Carousel>
      </div>
    ),
    code: `import { Carousel } from 'michael-ui';

export default () => (
  <Carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
  </Carousel>
);`,
  },

  collapse: {
    title: 'Collapse',
    category: 'Data Display',
    description: 'A content area which can be collapsed and expanded.',
    component: () => (
      <Collapse
        items={[
          { key: '1', label: 'What is Michael UI?', children: <p>A modern React 19 enterprise component library.</p> },
          { key: '2', label: 'How does theming work?', children: <p>Powered by CSS-in-JS design tokens with zero runtime overhead.</p> },
        ]}
        style={{ width: '100%' }}
      />
    ),
    code: `import { Collapse } from 'michael-ui';

export default () => (
  <Collapse
    items={[{ key: '1', label: 'Panel 1', children: <p>Content</p> }]}
  />
);`,
  },

  descriptions: {
    title: 'Descriptions',
    category: 'Data Display',
    description: 'Display multiple fields in groups with labeled format.',
    component: () => (
      <Descriptions title="Package Info" bordered size="small" style={{ width: '100%' }}>
        <Descriptions.Item label="Name">michael-ui</Descriptions.Item>
        <Descriptions.Item label="Version">1.0.0</Descriptions.Item>
        <Descriptions.Item label="Bundler">tsup (esbuild)</Descriptions.Item>
        <Descriptions.Item label="Framework">React 19</Descriptions.Item>
      </Descriptions>
    ),
    code: `import { Descriptions } from 'michael-ui';

export default () => (
  <Descriptions title="Info" bordered>
    <Descriptions.Item label="Name">michael-ui</Descriptions.Item>
  </Descriptions>
);`,
  },

  empty: {
    title: 'Empty',
    category: 'Data Display',
    description: 'Empty state placeholder when there is no data.',
    component: () => <Empty description="No data available" />,
    code: `import { Empty } from 'michael-ui';

export default () => <Empty />;`,
  },

  image: {
    title: 'Image',
    category: 'Data Display',
    description: 'Previewable image component with zoom, rotate, and preview mask.',
    component: () => (
      <Image
        width={160}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={{ borderRadius: 8 }}
      />
    ),
    code: `import { Image } from 'michael-ui';

export default () => (
  <Image width={200} src="https://..." />
);`,
  },

  list: {
    title: 'List',
    category: 'Data Display',
    description: 'Simple, tidy list component for text, actions, and thumbnails.',
    component: () => (
      <List
        size="small"
        bordered
        dataSource={['React 19 support', 'Dual ESM & CJS distribution', 'Dynamic Theme Customizer']}
        renderItem={(item) => <List.Item>{item}</List.Item>}
        style={{ width: '100%', maxWidth: 360 }}
      />
    ),
    code: `import { List } from 'michael-ui';

export default () => (
  <List
    dataSource={['Item 1', 'Item 2']}
    renderItem={item => <List.Item>{item}</List.Item>}
  />
);`,
  },

  popover: {
    title: 'Popover',
    category: 'Data Display',
    description: 'The floating card popped by clicking or hovering on an element.',
    component: () => (
      <Popover content="Detailed card content inside popover" title="Card Title">
        <Button type="primary">Hover for Popover</Button>
      </Popover>
    ),
    code: `import { Popover, Button } from 'michael-ui';

export default () => (
  <Popover content="Content" title="Title">
    <Button>Hover me</Button>
  </Popover>
);`,
  },

  'qr-code': {
    title: 'QRCode',
    category: 'Data Display',
    description: 'Render QR Codes with custom colors, icons, and error recovery.',
    component: () => <QRCode value="https://github.com/ant-design/ant-design" size={120} />,
    code: `import { QRCode } from 'michael-ui';

export default () => <QRCode value="https://example.com" />;`,
  },

  segmented: {
    title: 'Segmented',
    category: 'Data Display',
    description: 'Segmented control for switching between linear options.',
    component: () => (
      <Flex vertical gap="middle">
        <Segmented options={['Daily', 'Weekly', 'Monthly', 'Yearly']} />
        <Segmented
          options={[
            { label: 'List', value: 'list', icon: <AppstoreOutlined /> },
            { label: 'Map', value: 'map', icon: <SettingOutlined /> },
          ]}
        />
      </Flex>
    ),
    code: `import { Segmented } from 'michael-ui';

export default () => <Segmented options={['Daily', 'Weekly', 'Monthly']} />;`,
  },

  statistic: {
    title: 'Statistic',
    category: 'Data Display',
    description: 'Display statistics, metrics, or countdowns.',
    component: () => (
      <Flex gap="large">
        <Statistic title="Total Components" value={77} prefix={<SmileOutlined />} />
        <Statistic title="Build Speed" value={3.5} suffix="s" precision={1} />
      </Flex>
    ),
    code: `import { Statistic } from 'michael-ui';

export default () => <Statistic title="Active Users" value={112893} />;`,
  },

  table: {
    title: 'Table',
    category: 'Data Display',
    description: 'A primary component for structuring tabular data with sorting and tags.',
    component: () => (
      <Table
        size="small"
        pagination={false}
        dataSource={[
          { key: '1', name: 'Button', category: 'General', status: 'Stable' },
          { key: '2', name: 'Input', category: 'Data Entry', status: 'Stable' },
          { key: '3', name: 'Table', category: 'Data Display', status: 'Enhanced' },
        ]}
        columns={[
          { title: 'Component', dataIndex: 'name', key: 'name' },
          { title: 'Category', dataIndex: 'category', key: 'category' },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (tag: string) => <Tag color={tag === 'Stable' ? 'green' : 'blue'}>{tag}</Tag>,
          },
        ]}
      />
    ),
    code: `import { Table } from 'michael-ui';

export default () => (
  <Table
    dataSource={[{ key: '1', name: 'John', age: 32 }]}
    columns={[{ title: 'Name', dataIndex: 'name' }, { title: 'Age', dataIndex: 'age' }]}
  />
);`,
  },

  tabs: {
    title: 'Tabs',
    category: 'Data Display',
    description: 'Tabs make it easy to explore and switch between different views.',
    component: () => (
      <Tabs
        defaultActiveKey="1"
        items={[
          { key: '1', label: 'Preview', children: <p>Live interactive preview panel</p> },
          { key: '2', label: 'Code', children: <p>Copyable source code panel</p> },
          { key: '3', label: 'API', children: <p>Properties and methods specification</p> },
        ]}
      />
    ),
    code: `import { Tabs } from 'michael-ui';

export default () => (
  <Tabs
    items={[
      { key: '1', label: 'Tab 1', children: 'Content 1' },
      { key: '2', label: 'Tab 2', children: 'Content 2' },
    ]}
  />
);`,
  },

  tag: {
    title: 'Tag',
    category: 'Data Display',
    description: 'Tag for categorizing or marking items.',
    component: () => (
      <Flex gap="small" wrap>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="purple">purple</Tag>
        <Tag closable>closable</Tag>
      </Flex>
    ),
    code: `import { Tag } from 'michael-ui';

export default () => (
  <Tag color="blue">React 19</Tag>
);`,
  },

  timeline: {
    title: 'Timeline',
    category: 'Data Display',
    description: 'Vertical display timeline of an event list.',
    component: () => (
      <Timeline
        items={[
          { children: 'Monorepo initialized with pnpm' },
          { children: 'Packaged michael-ui with tsup' },
          { children: 'Fumadocs interactive documentation site' },
        ]}
      />
    ),
    code: `import { Timeline } from 'michael-ui';

export default () => (
  <Timeline
    items={[{ children: 'Step 1' }, { children: 'Step 2' }]}
  />
);`,
  },

  tooltip: {
    title: 'Tooltip',
    category: 'Data Display',
    description: 'A simple text popup tip upon hover.',
    component: () => (
      <Tooltip title="This is a responsive tooltip">
        <Button>Hover for Tooltip</Button>
      </Tooltip>
    ),
    code: `import { Tooltip, Button } from 'michael-ui';

export default () => (
  <Tooltip title="Tooltip prompt">
    <Button>Hover me</Button>
  </Tooltip>
);`,
  },

  tour: {
    title: 'Tour',
    category: 'Data Display',
    description: 'A popup tour guide component to lead users through features.',
    component: () => {
      const [open, setOpen] = useState(false);
      const btnRef = React.useRef(null);
      return (
        <>
          <Button ref={btnRef} type="primary" onClick={() => setOpen(true)}>
            Start Product Tour
          </Button>
          <Tour
            open={open}
            onClose={() => setOpen(false)}
            steps={[
              {
                title: 'Welcome to Michael UI',
                description: 'Explore components, customize tokens, and export themes.',
                target: () => btnRef.current,
              },
            ]}
          />
        </>
      );
    },
    code: `import { Tour, Button } from 'michael-ui';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Tour</Button>
      <Tour open={open} onClose={() => setOpen(false)} steps={[{ title: 'Step 1' }]} />
    </>
  );
};`,
  },

  tree: {
    title: 'Tree',
    category: 'Data Display',
    description: 'Expandable tree structure to present hierarchical data.',
    component: () => (
      <Tree
        defaultExpandedKeys={['0-0', '0-0-0']}
        treeData={[
          {
            title: 'packages',
            key: '0-0',
            children: [
              { title: 'michael-ui', key: '0-0-0', children: [{ title: 'components', key: '0-0-0-0' }] },
            ],
          },
          { title: 'apps', key: '0-1', children: [{ title: 'docs', key: '0-1-0' }] },
        ]}
      />
    ),
    code: `import { Tree } from 'michael-ui';

export default () => (
  <Tree
    treeData={[{ title: 'Root', key: '0', children: [{ title: 'Child', key: '0-0' }] }]}
  />
);`,
  },

  // ================= FEEDBACK =================
  alert: {
    title: 'Alert',
    category: 'Feedback',
    description: 'Alert component for displaying important feedback messages.',
    component: () => (
      <Flex vertical gap="small" style={{ width: '100%' }}>
        <Alert title="Success" description="Operation completed successfully." type="success" showIcon />
        <Alert title="Info" description="Detailed system information update." type="info" showIcon />
        <Alert title="Warning" description="Please verify your configuration." type="warning" showIcon closable />
        <Alert title="Error" description="Failed to establish connection." type="error" showIcon />
      </Flex>
    ),
    code: `import { Alert } from 'michael-ui';

export default () => (
  <Alert title="Success" type="success" showIcon />
);`,
  },

  drawer: {
    title: 'Drawer',
    category: 'Feedback',
    description: 'A panel which slides in from the edge of the screen.',
    component: () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button type="primary" onClick={() => setOpen(true)}>
            Open Side Drawer
          </Button>
          <Drawer title="Side Drawer" onClose={() => setOpen(false)} open={open}>
            <p>Drawer content panel</p>
            <p>Adapts to theme changes automatically.</p>
          </Drawer>
        </>
      );
    },
    code: `import { Drawer, Button } from 'michael-ui';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>Content</Drawer>
    </>
  );
};`,
  },

  message: {
    title: 'Message',
    category: 'Feedback',
    description: 'Display global feedback messages at the top of viewport.',
    component: () => (
      <Space wrap>
        <Button onClick={() => message.info('This is an info message')}>Info</Button>
        <Button type="primary" onClick={() => message.success('Action succeeded!')}>
          Success
        </Button>
        <Button danger onClick={() => message.error('Action failed!')}>
          Error
        </Button>
      </Space>
    ),
    code: `import { message, Button } from 'michael-ui';

export default () => (
  <Button onClick={() => message.success('Success!')}>Show Message</Button>
);`,
  },

  modal: {
    title: 'Modal',
    category: 'Feedback',
    description: 'Modal dialogs to provide information or request user confirmation.',
    component: () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button type="primary" onClick={() => setOpen(true)}>
            Open Dialog Modal
          </Button>
          <Modal
            title="Michael UI Modal"
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
          >
            <p>This modal dialog is rendered with Michael UI styling tokens.</p>
            <p>Theme color and border radius dynamically update here!</p>
          </Modal>
        </>
      );
    },
    code: `import { Modal, Button } from 'michael-ui';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onOk={() => setOpen(false)}>Modal content</Modal>
    </>
  );
};`,
  },

  notification: {
    title: 'Notification',
    category: 'Feedback',
    description: 'Display notification messages globally with complex layout.',
    component: () => (
      <Button
        type="primary"
        onClick={() => {
          notification.open({
            message: 'Notification Title',
            description: 'This is the notification description block in Michael UI.',
            icon: <SmileOutlined style={{ color: '#1677ff' }} />,
          });
        }}
      >
        Trigger Notification
      </Button>
    ),
    code: `import { notification, Button } from 'michael-ui';

export default () => (
  <Button onClick={() => notification.open({ message: 'Hello!' })}>
    Notify
  </Button>
);`,
  },

  popconfirm: {
    title: 'Popconfirm',
    category: 'Feedback',
    description: 'A compact and lightweight confirmation popover for actions.',
    component: () => (
      <Popconfirm
        title="Delete the task"
        description="Are you sure you want to proceed?"
        okText="Confirm"
        cancelText="Cancel"
      >
        <Button danger>Delete Item</Button>
      </Popconfirm>
    ),
    code: `import { Popconfirm, Button } from 'michael-ui';

export default () => (
  <Popconfirm title="Are you sure?">
    <Button danger>Delete</Button>
  </Popconfirm>
);`,
  },

  progress: {
    title: 'Progress',
    category: 'Feedback',
    description: 'Display current progress of an operation with bar or circle.',
    component: () => (
      <Flex vertical gap="middle" style={{ width: '100%', maxWidth: 360 }}>
        <Progress percent={30} />
        <Progress percent={70} status="active" />
        <Progress percent={100} />
        <Flex gap="middle">
          <Progress type="circle" percent={75} size={80} />
          <Progress type="circle" percent={100} size={80} />
        </Flex>
      </Flex>
    ),
    code: `import { Progress } from 'michael-ui';

export default () => (
  <>
    <Progress percent={50} status="active" />
    <Progress type="circle" percent={75} />
  </>
);`,
  },

  result: {
    title: 'Result',
    category: 'Feedback',
    description: 'Used to feed back the results of a series of operational tasks.',
    component: () => (
      <Result
        status="success"
        title="Operation Successful"
        subTitle="Package michael-ui published and verified."
        extra={<Button type="primary">Go Console</Button>}
      />
    ),
    code: `import { Result, Button } from 'michael-ui';

export default () => (
  <Result
    status="success"
    title="Success!"
    extra={<Button type="primary">Continue</Button>}
  />
);`,
  },

  skeleton: {
    title: 'Skeleton',
    category: 'Feedback',
    description: 'Provide a placeholder preview of your content before data loads.',
    component: () => <Skeleton avatar paragraph={{ rows: 2 }} active />,
    code: `import { Skeleton } from 'michael-ui';

export default () => <Skeleton avatar active />;`,
  },

  spin: {
    title: 'Spin',
    category: 'Feedback',
    description: 'A spinner for displaying loading states of a page or component.',
    component: () => (
      <Flex gap="large" align="center">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Flex>
    ),
    code: `import { Spin } from 'michael-ui';

export default () => <Spin size="large" />;`,
  },

  watermark: {
    title: 'Watermark',
    category: 'Feedback',
    description: 'Add specific text or image watermark patterns to pages.',
    component: () => (
      <Watermark content="Michael UI">
        <div style={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #d9d9d9', borderRadius: 8, width: '100%' }}>
          Protected Application Area
        </div>
      </Watermark>
    ),
    code: `import { Watermark } from 'michael-ui';

export default () => (
  <Watermark content="Confidential">
    <div style={{ height: 200 }}>Content</div>
  </Watermark>
);`,
  },

  // ================= OTHER =================
  app: {
    title: 'App',
    category: 'Other',
    description: 'App component provides context for modal, message, and notification hooks.',
    component: () => (
      <App>
        <Card size="small" style={{ maxWidth: 300 }}>
          <p>Wrapped inside Michael UI App provider for static methods.</p>
        </Card>
      </App>
    ),
    code: `import { App, Button } from 'michael-ui';

export default () => (
  <App>
    <Button>App Wrapped Button</Button>
  </App>
);`,
  },

  'config-provider': {
    title: 'ConfigProvider',
    category: 'Other',
    description: 'ConfigProvider provides a uniform theme and configuration across the application.',
    component: () => (
      <ConfigProvider theme={{ token: { colorPrimary: '#722ed1' } }}>
        <Button type="primary">Custom Token Button (#722ed1)</Button>
      </ConfigProvider>
    ),
    code: `import { ConfigProvider, Button } from 'michael-ui';

export default () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#722ed1' } }}>
    <Button type="primary">Themed Button</Button>
  </ConfigProvider>
);`,
  },

  'border-beam': {
    title: 'BorderBeam',
    category: 'Other',
    description: 'An animated glowing border beam for highlight effects.',
    component: () => (
      <div style={{ position: 'relative', padding: 24, borderRadius: 12, border: '1px solid #d9d9d9', textAlign: 'center' }}>
        <p>Interactive BorderBeam Effect</p>
        <BorderBeam size={100} duration={8} />
      </div>
    ),
    code: `import { BorderBeam } from 'michael-ui';

export default () => (
  <div style={{ position: 'relative', padding: 20 }}>
    <BorderBeam />
  </div>
);`,
  },
};

import { SUB_DEMOS } from './subdemos';

export const DEMO_REGISTRY: Record<string, DemoItem> = {
  ...BASE_DEMOS,
  ...SUB_DEMOS,
};
