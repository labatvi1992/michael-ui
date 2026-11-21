'use client';

import React, { useState } from 'react';
import {
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Collapse,
  DatePicker,
  Divider,
  Drawer,
  Dropdown,
  Flex,
  FloatButton,
  Form,
  Input,
  Listy,
  Masonry,
  Modal,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Result,
  Select,
  Skeleton,
  Slider,
  Space,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  Timeline,
  Tooltip,
  Typography,
} from 'michael-ui';

import {
  ArrowUpOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  DownOutlined,
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  HeartOutlined,
  InfoCircleOutlined,
  LockOutlined,
  PoweroffOutlined,
  SearchOutlined,
  SettingOutlined,
  SmileOutlined,
  SyncOutlined,
  UserOutlined,
} from '@ant-design/icons';

import type { DemoItem } from './registry';

export const SUB_DEMOS: Record<string, DemoItem> = {
  // ================= BUTTON EXAMPLES =================
  'button-variants': {
    title: 'Color & Variant',
    category: 'General',
    description: 'Combine colors and variants for customized styling.',
    isSubDemo: true,
    component: () => (
      <Flex vertical gap="middle">
        <Flex gap="small" wrap>
          <Button color="primary" variant="solid">Solid Primary</Button>
          <Button color="primary" variant="outlined">Outlined Primary</Button>
          <Button color="primary" variant="dashed">Dashed Primary</Button>
          <Button color="primary" variant="filled">Filled Primary</Button>
          <Button color="primary" variant="text">Text Primary</Button>
          <Button color="primary" variant="link">Link Primary</Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="danger" variant="solid">Solid Danger</Button>
          <Button color="danger" variant="outlined">Outlined Danger</Button>
          <Button color="danger" variant="filled">Filled Danger</Button>
        </Flex>
      </Flex>
    ),
    code: `import { Button, Flex } from 'michael-ui';

export default () => (
  <Flex gap="small" wrap>
    <Button color="primary" variant="solid">Solid</Button>
    <Button color="primary" variant="outlined">Outlined</Button>
    <Button color="primary" variant="dashed">Dashed</Button>
    <Button color="primary" variant="filled">Filled</Button>
  </Flex>
);`,
  },

  'button-sizes': {
    title: 'Button Sizes',
    category: 'General',
    description: 'Buttons support large, middle (default), and small sizes.',
    isSubDemo: true,
    component: () => (
      <Flex gap="small" align="center" wrap>
        <Button type="primary" size="large">Large Button</Button>
        <Button type="primary" size="middle">Middle Button</Button>
        <Button type="primary" size="small">Small Button</Button>
      </Flex>
    ),
    code: `import { Button, Flex } from 'michael-ui';

export default () => (
  <Flex gap="small" align="center">
    <Button type="primary" size="large">Large</Button>
    <Button type="primary" size="middle">Middle</Button>
    <Button type="primary" size="small">Small</Button>
  </Flex>
);`,
  },

  'button-loading': {
    title: 'Loading State',
    category: 'General',
    description: 'A loading state avoids multiple submits.',
    isSubDemo: true,
    component: () => {
      const [loadings, setLoadings] = useState<boolean[]>([false, false]);
      const enterLoading = (index: number) => {
        setLoadings((prev) => {
          const next = [...prev];
          next[index] = true;
          return next;
        });
        setTimeout(() => {
          setLoadings((prev) => {
            const next = [...prev];
            next[index] = false;
            return next;
          });
        }, 2000);
      };
      return (
        <Flex gap="small" wrap>
          <Button type="primary" loading>Loading Button</Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[0]}
            onClick={() => enterLoading(0)}
          >
            Click to Load
          </Button>
        </Flex>
      );
    },
    code: `import { Button, Flex } from 'michael-ui';
import { PoweroffOutlined } from '@ant-design/icons';

export default () => (
  <Flex gap="small">
    <Button type="primary" loading>Loading</Button>
    <Button type="primary" icon={<PoweroffOutlined />}>Click to Load</Button>
  </Flex>
);`,
  },

  'button-danger': {
    title: 'Danger & Ghost Buttons',
    category: 'General',
    description: 'Danger buttons indicate destructive actions. Ghost makes buttons transparent.',
    isSubDemo: true,
    component: () => (
      <Flex gap="small" wrap align="center">
        <Button danger type="primary">Danger Primary</Button>
        <Button danger>Danger Default</Button>
        <Button danger type="dashed">Danger Dashed</Button>
        <div style={{ background: '#001529', padding: '6px 12px', borderRadius: 6 }}>
          <Button ghost type="primary">Ghost Button</Button>
        </div>
      </Flex>
    ),
    code: `import { Button, Flex } from 'michael-ui';

export default () => (
  <Flex gap="small">
    <Button danger type="primary">Danger</Button>
    <Button ghost type="primary">Ghost</Button>
  </Flex>
);`,
  },

  'button-block': {
    title: 'Block Button',
    category: 'General',
    description: 'Block button fits 100% parent container width.',
    isSubDemo: true,
    component: () => (
      <div style={{ maxWidth: 360, width: '100%' }}>
        <Flex vertical gap="small">
          <Button type="primary" block>Primary Block Button</Button>
          <Button block>Default Block Button</Button>
        </Flex>
      </div>
    ),
    code: `import { Button } from 'michael-ui';

export default () => (
  <Button type="primary" block>Full Width Button</Button>
);`,
  },

  'button-icon': {
    title: 'Buttons with Icons',
    category: 'General',
    description: 'Button with vector icon at start or end.',
    isSubDemo: true,
    component: () => (
      <Flex gap="small" wrap>
        <Button type="primary" icon={<SearchOutlined />}>Search</Button>
        <Button icon={<DownloadOutlined />}>Download</Button>
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />}>Round</Button>
      </Flex>
    ),
    code: `import { Button } from 'michael-ui';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

export default () => (
  <Button type="primary" icon={<SearchOutlined />}>Search</Button>
);`,
  },

  // ================= INPUT EXAMPLES =================
  'input-sizes': {
    title: 'Input Sizes',
    category: 'Data Entry',
    description: 'There are three sizes of an Input box: large, middle, and small.',
    isSubDemo: true,
    component: () => (
      <Flex vertical gap="small" style={{ maxWidth: 360, width: '100%' }}>
        <Input size="large" placeholder="Large input" prefix={<UserOutlined />} />
        <Input size="middle" placeholder="Default middle input" prefix={<UserOutlined />} />
        <Input size="small" placeholder="Small input" prefix={<UserOutlined />} />
      </Flex>
    ),
    code: `import { Input } from 'michael-ui';

export default () => (
  <>
    <Input size="large" placeholder="Large" />
    <Input size="middle" placeholder="Middle" />
    <Input size="small" placeholder="Small" />
  </>
);`,
  },

  'input-addon': {
    title: 'Addon & Pre/Suffix',
    category: 'Data Entry',
    description: 'Using addonBefore/After or prefix/suffix icons.',
    isSubDemo: true,
    component: () => (
      <Flex vertical gap="small" style={{ maxWidth: 400, width: '100%' }}>
        <Input addonBefore="https://" addonAfter=".com" defaultValue="mysite" />
        <Input prefix={<UserOutlined />} suffix={<InfoCircleOutlined />} placeholder="Username" />
        <Input prefix="$" suffix="USD" placeholder="Amount" />
      </Flex>
    ),
    code: `import { Input } from 'michael-ui';

export default () => (
  <Input addonBefore="https://" addonAfter=".com" defaultValue="site" />
);`,
  },

  'input-password': {
    title: 'Password Input',
    category: 'Data Entry',
    description: 'Input.Password allows secure masked password input with visibility toggle.',
    isSubDemo: true,
    component: () => (
      <div style={{ maxWidth: 360, width: '100%' }}>
        <Input.Password prefix={<LockOutlined />} placeholder="Input password" />
      </div>
    ),
    code: `import { Input } from 'michael-ui';

export default () => <Input.Password placeholder="Password" />;`,
  },

  'input-search': {
    title: 'Search Input',
    category: 'Data Entry',
    description: 'Input with a search button or icon.',
    isSubDemo: true,
    component: () => (
      <Flex vertical gap="small" style={{ maxWidth: 360, width: '100%' }}>
        <Input.Search placeholder="Input search text" onSearch={(val) => alert(val)} />
        <Input.Search placeholder="Search with button" enterButton="Search" />
      </Flex>
    ),
    code: `import { Input } from 'michael-ui';

export default () => (
  <Input.Search placeholder="Search..." enterButton="Search" />
);`,
  },

  'input-textarea': {
    title: 'TextArea with Count',
    category: 'Data Entry',
    description: 'For multi-line text input with auto-sizing and character counting.',
    isSubDemo: true,
    component: () => (
      <div style={{ maxWidth: 400, width: '100%' }}>
        <Input.TextArea
          showCount
          maxLength={100}
          placeholder="Enter feedback or comments here..."
          autoSize={{ minRows: 3, maxRows: 6 }}
        />
      </div>
    ),
    code: `import { Input } from 'michael-ui';

export default () => (
  <Input.TextArea showCount maxLength={100} placeholder="Type notes..." />
);`,
  },

  'input-status': {
    title: 'Input Status',
    category: 'Data Entry',
    description: 'Status can be set to error or warning.',
    isSubDemo: true,
    component: () => (
      <Flex vertical gap="small" style={{ maxWidth: 360, width: '100%' }}>
        <Input status="error" placeholder="Error status input" />
        <Input status="warning" placeholder="Warning status input" />
        <Input allowClear placeholder="Input with clear button" />
      </Flex>
    ),
    code: `import { Input } from 'michael-ui';

export default () => (
  <>
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
  </>
);`,
  },

  // ================= TABLE EXAMPLES =================
  'table-selection': {
    title: 'Table Row Selection',
    category: 'Data Display',
    description: 'Select rows for bulk operations using checkboxes.',
    isSubDemo: true,
    component: () => {
      const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
      return (
        <div style={{ width: '100%' }}>
          <div style={{ marginBottom: 12 }}>
            Selected: <Tag color="blue">{selectedRowKeys.length}</Tag> items
          </div>
          <Table
            size="small"
            rowSelection={{
              selectedRowKeys,
              onChange: setSelectedRowKeys,
            }}
            dataSource={[
              { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
              { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
              { key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park' },
            ]}
            columns={[
              { title: 'Name', dataIndex: 'name', key: 'name' },
              { title: 'Age', dataIndex: 'age', key: 'age' },
              { title: 'Address', dataIndex: 'address', key: 'address' },
            ]}
            pagination={false}
          />
        </div>
      );
    },
    code: `import { Table } from 'michael-ui';

export default () => (
  <Table
    rowSelection={{ type: 'checkbox' }}
    columns={columns}
    dataSource={data}
  />
);`,
  },

  'table-sorting': {
    title: 'Table Sorting & Filters',
    category: 'Data Display',
    description: 'Sort columns or filter values directly on headers.',
    isSubDemo: true,
    component: () => (
      <Table
        size="small"
        pagination={false}
        dataSource={[
          { key: '1', name: 'Alice', age: 29, score: 95 },
          { key: '2', name: 'Bob', age: 35, score: 82 },
          { key: '3', name: 'Charlie', age: 24, score: 88 },
        ]}
        columns={[
          { title: 'Name', dataIndex: 'name', key: 'name' },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
          },
          {
            title: 'Score',
            dataIndex: 'score',
            key: 'score',
            sorter: (a, b) => a.score - b.score,
          },
        ]}
      />
    ),
    code: `import { Table } from 'michael-ui';

export default () => (
  <Table
    columns={[
      { title: 'Age', dataIndex: 'age', sorter: (a, b) => a.age - b.age }
    ]}
    dataSource={data}
  />
);`,
  },

  'table-size': {
    title: 'Compact & Bordered Table',
    category: 'Data Display',
    description: 'Use size="small" and bordered for dense tabular data.',
    isSubDemo: true,
    component: () => (
      <Table
        size="small"
        bordered
        pagination={false}
        dataSource={[
          { key: '1', item: 'Michael UI Core', version: '1.0.0', status: 'Published' },
          { key: '2', item: 'Fumadocs Site', version: '16.17.7', status: 'Active' },
        ]}
        columns={[
          { title: 'Item', dataIndex: 'item', key: 'item' },
          { title: 'Version', dataIndex: 'version', key: 'version' },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (s: string) => <Tag color="green">{s}</Tag>,
          },
        ]}
      />
    ),
    code: `import { Table } from 'michael-ui';

export default () => (
  <Table size="small" bordered columns={columns} dataSource={data} />
);`,
  },

  // ================= SELECT EXAMPLES =================
  'select-multiple': {
    title: 'Multiple & Tags Mode',
    category: 'Data Entry',
    description: 'Multi-selection using tag pill rendering.',
    isSubDemo: true,
    component: () => (
      <div style={{ maxWidth: 360, width: '100%' }}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Select technologies"
          defaultValue={['react', 'tsup']}
          options={[
            { value: 'react', label: 'React 19' },
            { value: 'tsup', label: 'tsup Bundler' },
            { value: 'pnpm', label: 'pnpm Workspace' },
            { value: 'fumadocs', label: 'Fumadocs' },
          ]}
        />
      </div>
    ),
    code: `import { Select } from 'michael-ui';

export default () => (
  <Select mode="multiple" placeholder="Select tags" options={options} />
);`,
  },

  'select-search': {
    title: 'Searchable Select',
    category: 'Data Entry',
    description: 'Filter options dynamically as user types.',
    isSubDemo: true,
    component: () => (
      <Select
        showSearch
        style={{ width: 240 }}
        placeholder="Search developer..."
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          { value: '1', label: 'Dan Abramov' },
          { value: '2', label: 'Evan You' },
          { value: '3', label: 'Sophie Alpert' },
        ]}
      />
    ),
    code: `import { Select } from 'michael-ui';

export default () => (
  <Select showSearch placeholder="Search..." options={options} />
);`,
  },

  'select-status': {
    title: 'Select Status & Sizes',
    category: 'Data Entry',
    description: 'Error and warning status on Select component.',
    isSubDemo: true,
    component: () => (
      <Flex gap="small" wrap>
        <Select status="error" placeholder="Error state" style={{ width: 140 }} />
        <Select status="warning" placeholder="Warning state" style={{ width: 140 }} />
        <Select size="small" placeholder="Small select" style={{ width: 120 }} />
      </Flex>
    ),
    code: `import { Select } from 'michael-ui';

export default () => (
  <Select status="error" placeholder="Error" />
);`,
  },

  // ================= MODAL EXAMPLES =================
  'modal-async': {
    title: 'Asynchronous Modal',
    category: 'Feedback',
    description: 'Modal with asynchronous confirm button loading indicator.',
    isSubDemo: true,
    component: () => {
      const [open, setOpen] = useState(false);
      const [confirmLoading, setConfirmLoading] = useState(false);
      const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
          setOpen(false);
          setConfirmLoading(false);
        }, 2000);
      };
      return (
        <>
          <Button type="primary" onClick={() => setOpen(true)}>Open Async Modal</Button>
          <Modal
            title="Async Operation"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={() => setOpen(false)}
          >
            <p>Clicking OK will trigger a 2-second background task...</p>
          </Modal>
        </>
      );
    },
    code: `import { Modal, Button } from 'michael-ui';

export default () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal open={open} confirmLoading={loading} onOk={() => setLoading(true)}>
        Content
      </Modal>
    </>
  );
};`,
  },

  'modal-confirm': {
    title: 'Confirm Dialog',
    category: 'Feedback',
    description: 'Static confirmation dialog methods.',
    isSubDemo: true,
    component: () => {
      const showConfirm = () => {
        Modal.confirm({
          title: 'Do you want to delete these items?',
          icon: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
          content: 'This operation cannot be undone.',
          onOk() {},
        });
      };
      return <Button danger onClick={showConfirm}>Confirm Dialog</Button>;
    },
    code: `import { Modal, Button } from 'michael-ui';

export default () => (
  <Button onClick={() => Modal.confirm({ title: 'Are you sure?' })}>
    Confirm
  </Button>
);`,
  },

  // ================= CARD EXAMPLES =================
  'card-grid': {
    title: 'Card Grid Layout',
    category: 'Data Display',
    description: 'Multi-cell grid cards within a single container.',
    isSubDemo: true,
    component: () => (
      <Card title="Card Grid Overview" style={{ maxWidth: 500, width: '100%' }}>
        <Card.Grid style={{ width: '50%', textAlign: 'center' }}>Package: michael-ui</Card.Grid>
        <Card.Grid style={{ width: '50%', textAlign: 'center' }}>Bundler: tsup</Card.Grid>
        <Card.Grid style={{ width: '50%', textAlign: 'center' }}>Docs: Fumadocs</Card.Grid>
        <Card.Grid style={{ width: '50%', textAlign: 'center' }}>Framework: Next.js 16</Card.Grid>
      </Card>
    ),
    code: `import { Card } from 'michael-ui';

export default () => (
  <Card title="Grid">
    <Card.Grid style={{ width: '50%' }}>Cell 1</Card.Grid>
    <Card.Grid style={{ width: '50%' }}>Cell 2</Card.Grid>
  </Card>
);`,
  },

  'card-meta': {
    title: 'Card with Meta & Cover',
    category: 'Data Display',
    description: 'Card with cover image, avatar, actions, and description.',
    isSubDemo: true,
    component: () => (
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Card.Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title="Card Title"
          description="High performance React components."
        />
      </Card>
    ),
    code: `import { Card, Avatar } from 'michael-ui';

export default () => (
  <Card cover={<img src="..." />}>
    <Card.Meta avatar={<Avatar src="..." />} title="Title" description="Details" />
  </Card>
);`,
  },

  // ================= FORM EXAMPLES =================
  'form-layout': {
    title: 'Form Layouts',
    category: 'Data Entry',
    description: 'Forms support horizontal, vertical, and inline layouts.',
    isSubDemo: true,
    component: () => (
      <Form layout="inline">
        <Form.Item label="Search">
          <Input placeholder="Keyword" />
        </Form.Item>
        <Form.Item label="Category">
          <Select defaultValue="all" options={[{ value: 'all', label: 'All' }]} style={{ width: 100 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Filter</Button>
        </Form.Item>
      </Form>
    ),
    code: `import { Form, Input, Button } from 'michael-ui';

export default () => (
  <Form layout="inline">
    <Form.Item label="User"><Input /></Form.Item>
    <Button type="primary">Submit</Button>
  </Form>
);`,
  },

  'form-validation': {
    title: 'Form Validation Rules',
    category: 'Data Entry',
    description: 'Validation with required fields and error states.',
    isSubDemo: true,
    component: () => (
      <Form layout="vertical" style={{ maxWidth: 360, width: '100%' }}>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: 'Please input email!' },
            { type: 'email', message: 'The input is not valid E-mail!' },
          ]}
        >
          <Input placeholder="user@company.com" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit Form</Button>
        </Form.Item>
      </Form>
    ),
    code: `import { Form, Input, Button } from 'michael-ui';

export default () => (
  <Form layout="vertical">
    <Form.Item label="Email" rules={[{ required: true, type: 'email' }]}>
      <Input />
    </Form.Item>
    <Button type="primary" htmlType="submit">Submit</Button>
  </Form>
);`,
  },

  // ================= ALERT EXAMPLES =================
  'alert-description': {
    title: 'Alert with Description',
    category: 'Feedback',
    description: 'Detailed multi-line feedback alert.',
    isSubDemo: true,
    component: () => (
      <Alert
        title="Operation Notification"
        description="Your deployment to the production environment has finished successfully. No breaking changes detected."
        type="info"
        showIcon
        style={{ width: '100%' }}
      />
    ),
    code: `import { Alert } from 'michael-ui';

export default () => (
  <Alert title="Title" description="Detailed message." type="info" showIcon />
);`,
  },

  'alert-closable': {
    title: 'Closable Alert Banner',
    category: 'Feedback',
    description: 'Closable alert for dismissible announcements.',
    isSubDemo: true,
    component: () => (
      <Alert
        title="Warning Notice"
        description="System maintenance scheduled for tonight at 02:00 AM UTC."
        type="warning"
        closable
        showIcon
        style={{ width: '100%' }}
      />
    ),
    code: `import { Alert } from 'michael-ui';

export default () => (
  <Alert title="Notice" type="warning" closable showIcon />
);`,
  },

  // ================= TABS EXAMPLES =================
  'tabs-card': {
    title: 'Card Style Tabs',
    category: 'Data Display',
    description: 'Tabs rendered with container card tabs styling.',
    isSubDemo: true,
    component: () => (
      <Tabs
        type="card"
        defaultActiveKey="1"
        items={[
          { key: '1', label: 'Overview', children: <p>Overview dashboard content</p> },
          { key: '2', label: 'Dependencies', children: <p>Dependencies list content</p> },
          { key: '3', label: 'Settings', children: <p>Settings configuration panel</p> },
        ]}
      />
    ),
    code: `import { Tabs } from 'michael-ui';

export default () => (
  <Tabs type="card" items={[{ key: '1', label: 'Tab 1', children: 'Content' }]} />
);`,
  },

  'tabs-icon': {
    title: 'Tabs with Icons',
    category: 'Data Display',
    description: 'Enhance tab labels with semantic vector icons.',
    isSubDemo: true,
    component: () => (
      <Tabs
        defaultActiveKey="1"
        items={[
          { key: '1', label: 'Profile', icon: <UserOutlined />, children: 'User Profile' },
          { key: '2', label: 'Security', icon: <LockOutlined />, children: 'Security Controls' },
          { key: '3', label: 'Settings', icon: <SettingOutlined />, children: 'System Settings' },
        ]}
      />
    ),
    code: `import { Tabs } from 'michael-ui';
import { UserOutlined } from '@ant-design/icons';

export default () => (
  <Tabs items={[{ key: '1', label: 'Profile', icon: <UserOutlined />, children: 'Content' }]} />
);`,
  },

  // ================= BADGE EXAMPLES =================
  'badge-status': {
    title: 'Status Dot Badge',
    category: 'Data Display',
    description: 'Stand-alone badges for status indication.',
    isSubDemo: true,
    component: () => (
      <Flex gap="middle" wrap>
        <Badge status="success" text="Success" />
        <Badge status="error" text="Error" />
        <Badge status="default" text="Default" />
        <Badge status="processing" text="Processing" />
        <Badge status="warning" text="Warning" />
      </Flex>
    ),
    code: `import { Badge } from 'michael-ui';

export default () => (
  <Badge status="processing" text="Running" />
);`,
  },

  'badge-ribbon': {
    title: 'Ribbon Badge',
    category: 'Data Display',
    description: 'Badges wrapped around cards as corner ribbons.',
    isSubDemo: true,
    component: () => (
      <Badge.Ribbon text="Hot Feature" color="red">
        <Card title="Michael UI Pro" size="small" style={{ width: 280 }}>
          Modern CSS-in-JS Theme Tokens.
        </Card>
      </Badge.Ribbon>
    ),
    code: `import { Badge, Card } from 'michael-ui';

export default () => (
  <Badge.Ribbon text="New">
    <Card>Content</Card>
  </Badge.Ribbon>
);`,
  },

  // ================= PROGRESS EXAMPLES =================
  'progress-circle': {
    title: 'Circular & Dashboard Progress',
    category: 'Feedback',
    description: 'Circular gauge indicators for meters and storage.',
    isSubDemo: true,
    component: () => (
      <Flex gap="large" align="center">
        <Progress type="circle" percent={75} />
        <Progress type="dashboard" percent={90} status="success" />
      </Flex>
    ),
    code: `import { Progress } from 'michael-ui';

export default () => (
  <>
    <Progress type="circle" percent={75} />
    <Progress type="dashboard" percent={90} />
  </>
);`,
  },

  // ================= STATISTIC EXAMPLES =================
  'statistic-countdown': {
    title: 'Countdown Timer',
    category: 'Data Display',
    description: 'Countdown statistic for timers and deadlines.',
    isSubDemo: true,
    component: () => {
      const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
      return <Statistic.Countdown title="Countdown to Release" value={deadline} format="D [days] H [hours] m [mins] s [s]" />;
    },
    code: `import { Statistic } from 'michael-ui';

export default () => (
  <Statistic.Countdown title="Countdown" value={Date.now() + 1000 * 60 * 60} />
);`,
  },

  // ================= AVATAR EXAMPLES =================
  'avatar-group': {
    title: 'Avatar Group',
    category: 'Data Display',
    description: 'Overlapping group of avatars with max count.',
    isSubDemo: true,
    component: () => (
      <Avatar.Group max={{ count: 3, style: { color: '#f56a00', backgroundColor: '#fde3cf' } }}>
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" />
      </Avatar.Group>
    ),
    code: `import { Avatar } from 'michael-ui';

export default () => (
  <Avatar.Group max={{ count: 2 }}>
    <Avatar src="..." />
    <Avatar src="..." />
  </Avatar.Group>
);`,
  },

  // ================= DATEPICKER EXAMPLES =================
  'date-picker-range': {
    title: 'RangePicker',
    category: 'Data Entry',
    description: 'DatePicker.RangePicker for start and end date selection.',
    isSubDemo: true,
    component: () => (
      <Flex vertical gap="small">
        <DatePicker.RangePicker />
        <DatePicker.RangePicker showTime />
      </Flex>
    ),
    code: `import { DatePicker } from 'michael-ui';

export default () => <DatePicker.RangePicker />;`,
  },

  // ================= TAG EXAMPLES =================
  'tag-colors': {
    title: 'Colorful Preset Tags',
    category: 'Data Display',
    description: 'Preset color palette for tags.',
    isSubDemo: true,
    component: () => (
      <Flex gap="small" wrap>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="purple">purple</Tag>
      </Flex>
    ),
    code: `import { Tag } from 'michael-ui';

export default () => (
  <>
    <Tag color="blue">Blue</Tag>
    <Tag color="green">Green</Tag>
  </>
);`,
  },

  'tag-checkable': {
    title: 'Checkable Tag',
    category: 'Data Display',
    description: 'Interactive tags with toggle checked state.',
    isSubDemo: true,
    component: () => {
      const [checked1, setChecked1] = useState(true);
      const [checked2, setChecked2] = useState(false);
      return (
        <Flex gap="small">
          <Tag.CheckableTag checked={checked1} onChange={setChecked1}>React 19</Tag.CheckableTag>
          <Tag.CheckableTag checked={checked2} onChange={setChecked2}>Turbopack</Tag.CheckableTag>
        </Flex>
      );
    },
    code: `import { Tag } from 'michael-ui';

export default () => {
  const [checked, setChecked] = useState(true);
  return <Tag.CheckableTag checked={checked} onChange={setChecked}>Tag</Tag.CheckableTag>;
};`,
  },

  // ================= SWITCH EXAMPLES =================
  'switch-text': {
    title: 'Switch with Text & Icons',
    category: 'Data Entry',
    description: 'Custom labels inside the switch handle.',
    isSubDemo: true,
    component: () => (
      <Flex gap="middle">
        <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
        <Switch checkedChildren="1" unCheckedChildren="0" />
      </Flex>
    ),
    code: `import { Switch } from 'michael-ui';

export default () => (
  <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
);`,
  },

  // ================= SLIDER EXAMPLES =================
  'slider-range': {
    title: 'Range Slider with Marks',
    category: 'Data Entry',
    description: 'Range slider with custom marks and labels.',
    isSubDemo: true,
    component: () => (
      <div style={{ maxWidth: 360, width: '100%', padding: '0 12px' }}>
        <Slider
          range
          marks={{ 0: '0°C', 26: '26°C', 37: '37°C', 100: { style: { color: '#f50' }, label: '100°C' } }}
          defaultValue={[26, 37]}
        />
      </div>
    ),
    code: `import { Slider } from 'michael-ui';

export default () => (
  <Slider range marks={{ 0: '0%', 100: '100%' }} defaultValue={[20, 80]} />
);`,
  },

  // ================= COLLAPSE EXAMPLES =================
  'collapse-accordion': {
    title: 'Accordion Collapse',
    category: 'Data Display',
    description: 'In accordion mode, only one panel can be expanded at a time.',
    isSubDemo: true,
    component: () => (
      <Collapse
        accordion
        items={[
          { key: '1', label: 'Section 1', children: <p>First accordion section</p> },
          { key: '2', label: 'Section 2', children: <p>Second accordion section</p> },
          { key: '3', label: 'Section 3', children: <p>Third accordion section</p> },
        ]}
        style={{ width: '100%' }}
      />
    ),
    code: `import { Collapse } from 'michael-ui';

export default () => <Collapse accordion items={items} />;`,
  },

  // ================= TOOLTIP & POPOVER EXAMPLES =================
  'tooltip-placement': {
    title: 'Tooltip Placements',
    category: 'Data Display',
    description: 'Position tooltip in 12 different directions.',
    isSubDemo: true,
    component: () => (
      <Flex gap="small" wrap>
        <Tooltip placement="topLeft" title="Top Left"><Button>TL</Button></Tooltip>
        <Tooltip placement="top" title="Top"><Button>Top</Button></Tooltip>
        <Tooltip placement="topRight" title="Top Right"><Button>TR</Button></Tooltip>
        <Tooltip placement="bottom" title="Bottom"><Button>Bottom</Button></Tooltip>
      </Flex>
    ),
    code: `import { Tooltip, Button } from 'michael-ui';

export default () => (
  <Tooltip placement="top" title="Prompt">
    <Button>Hover</Button>
  </Tooltip>
);`,
  },

  'popover-trigger': {
    title: 'Popover Triggers',
    category: 'Data Display',
    description: 'Popover can be triggered by hover, click, or focus.',
    isSubDemo: true,
    component: () => (
      <Flex gap="small">
        <Popover content="Content triggered on hover" title="Hover" trigger="hover">
          <Button>Hover</Button>
        </Popover>
        <Popover content="Content triggered on click" title="Click" trigger="click">
          <Button type="primary">Click</Button>
        </Popover>
      </Flex>
    ),
    code: `import { Popover, Button } from 'michael-ui';

export default () => (
  <Popover content="Content" title="Title" trigger="click">
    <Button>Click me</Button>
  </Popover>
);`,
  },

  'popconfirm-async': {
    title: 'Async Popconfirm',
    category: 'Feedback',
    description: 'Popconfirm with async confirm action.',
    isSubDemo: true,
    component: () => {
      const confirm = () =>
        new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });
      return (
        <Popconfirm title="Delete item" description="Are you sure?" onConfirm={confirm}>
          <Button danger>Async Delete</Button>
        </Popconfirm>
      );
    },
    code: `import { Popconfirm, Button } from 'michael-ui';

export default () => (
  <Popconfirm title="Delete" onConfirm={asyncAction}>
    <Button danger>Delete</Button>
  </Popconfirm>
);`,
  },

  // ================= DRAWER EXAMPLES =================
  'drawer-placement': {
    title: 'Drawer Placements',
    category: 'Feedback',
    description: 'Drawer can slide from Top, Right, Bottom, or Left.',
    isSubDemo: true,
    component: () => {
      const [open, setOpen] = useState(false);
      const [placement, setPlacement] = useState<'top' | 'right' | 'bottom' | 'left'>('right');
      return (
        <Flex gap="small">
          <Button onClick={() => { setPlacement('left'); setOpen(true); }}>Left</Button>
          <Button onClick={() => { setPlacement('right'); setOpen(true); }}>Right</Button>
          <Button onClick={() => { setPlacement('bottom'); setOpen(true); }}>Bottom</Button>
          <Drawer title="Placement Drawer" placement={placement} onClose={() => setOpen(false)} open={open}>
            <p>Drawer sliding from {placement}</p>
          </Drawer>
        </Flex>
      );
    },
    code: `import { Drawer, Button } from 'michael-ui';

export default () => (
  <Drawer placement="left" open={open} onClose={() => setOpen(false)}>
    Content
  </Drawer>
);`,
  },

  // ================= SPIN & SKELETON EXAMPLES =================
  'spin-container': {
    title: 'Spin Container',
    category: 'Feedback',
    description: 'Wrap Spin over any container during loading.',
    isSubDemo: true,
    component: () => {
      const [loading, setLoading] = useState(false);
      return (
        <Flex vertical gap="small" style={{ maxWidth: 360, width: '100%' }}>
          <Spin spinning={loading} tip="Loading data...">
            <Card size="small" title="Card Content">
              <p>Card content that can be covered with a loading spinner.</p>
            </Card>
          </Spin>
          <Switch checked={loading} onChange={setLoading} checkedChildren="Loading" unCheckedChildren="Normal" />
        </Flex>
      );
    },
    code: `import { Spin, Card, Switch } from 'michael-ui';

export default () => (
  <Spin spinning={loading}>
    <Card>Content</Card>
  </Spin>
);`,
  },

  'skeleton-complex': {
    title: 'Complex Skeleton Loading',
    category: 'Feedback',
    description: 'Skeleton with avatar, button, and multi-row paragraphs.',
    isSubDemo: true,
    component: () => (
      <div style={{ maxWidth: 400, width: '100%' }}>
        <Skeleton avatar paragraph={{ rows: 3 }} active />
      </div>
    ),
    code: `import { Skeleton } from 'michael-ui';

export default () => <Skeleton avatar paragraph={{ rows: 3 }} active />;`,
  },

  // ================= RESULT EXAMPLES =================
  'result-404': {
    title: '404 Result Page',
    category: 'Feedback',
    description: 'Display 404 page when resource is not found.',
    isSubDemo: true,
    component: () => (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    ),
    code: `import { Result, Button } from 'michael-ui';

export default () => (
  <Result status="404" title="404" subTitle="Page not found" extra={<Button type="primary">Back</Button>} />
);`,
  },

  // ================= FLOATBUTTON EXAMPLES =================
  'float-button-backtop': {
    title: 'FloatButton.BackTop',
    category: 'General',
    description: 'Smooth scrolling back to top of page.',
    isSubDemo: true,
    component: () => (
      <div style={{ position: 'relative', height: 100, border: '1px dashed #d9d9d9', borderRadius: 8, padding: 16 }}>
        <span>Scroll container back top action:</span>
        <FloatButton.BackTop visibilityHeight={0} style={{ position: 'absolute', right: 20, bottom: 20 }} />
      </div>
    ),
    code: `import { FloatButton } from 'michael-ui';

export default () => <FloatButton.BackTop />;`,
  },

  // ================= BREADCRUMB EXAMPLES =================
  'breadcrumb-icon': {
    title: 'Breadcrumb with Icons',
    category: 'Navigation',
    description: 'Items with icons for visual orientation.',
    isSubDemo: true,
    component: () => (
      <Breadcrumb
        items={[
          { href: '', title: <><UserOutlined /><span>Home</span></> },
          { href: '', title: <><SettingOutlined /><span>Settings</span></> },
          { title: 'Profile' },
        ]}
      />
    ),
    code: `import { Breadcrumb } from 'michael-ui';
import { UserOutlined } from '@ant-design/icons';

export default () => (
  <Breadcrumb items={[{ title: <><UserOutlined /><span>Home</span></> }]} />
);`,
  },

  // ================= DIVIDER EXAMPLES =================
  'divider-vertical': {
    title: 'Vertical Divider',
    category: 'Layout',
    description: 'Vertical divider between inline text elements.',
    isSubDemo: true,
    component: () => (
      <div>
        <span>Text</span>
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" />
        <a href="#">More</a>
      </div>
    ),
    code: `import { Divider } from 'michael-ui';

export default () => (
  <>
    <span>Text</span>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </>
);`,
  },

  // ================= TYPOGRAPHY EXAMPLES =================
  'typography-interactive': {
    title: 'Interactive Typography',
    category: 'General',
    description: 'Copyable, editable, and keyboard style text.',
    isSubDemo: true,
    component: () => {
      const [editableStr, setEditableStr] = useState('Click edit icon to edit me.');
      return (
        <Flex vertical gap="small">
          <Typography.Paragraph editable={{ onChange: setEditableStr }}>
            {editableStr}
          </Typography.Paragraph>
          <Typography.Paragraph copyable>
            Click copy icon to copy this code snippet.
          </Typography.Paragraph>
        </Flex>
      );
    },
    code: `import { Typography } from 'michael-ui';

export default () => (
  <Typography.Paragraph copyable editable>
    Editable text
  </Typography.Paragraph>
);`,
  },

  // ================= MASONRY =================
  masonry: {
    title: 'Masonry',
    category: 'Layout',
    description: 'A responsive waterfall masonry layout for cards and media.',
    component: () => {
      const heights = [100, 60, 120, 80, 110, 70, 90, 60];
      return (
        <div style={{ width: '100%', maxWidth: 440 }}>
          <Masonry
            columns={3}
            gutter={12}
            items={heights.map((h, i) => ({ key: `m-${i}`, data: h }))}
            itemRender={({ data, index }) => (
              <Card size="small" style={{ height: data, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Item {index + 1} ({data}px)
              </Card>
            )}
          />
        </div>
      );
    },
    code: `import { Masonry, Card } from 'michael-ui';

export default () => (
  <Masonry
    columns={3}
    gutter={12}
    items={[{ key: '1', data: 100 }, { key: '2', data: 60 }]}
    itemRender={({ data, index }) => <Card style={{ height: data }}>Item {index + 1}</Card>}
  />
);`,
  },

  // ================= LISTY =================
  listy: {
    title: 'Listy',
    category: 'Data Display',
    description: 'Modern high-performance list component with virtualization.',
    component: () => {
      const items = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        content: `Virtualized Listy Item #${i + 1}`,
      }));
      return (
        <div style={{ width: '100%', maxWidth: 360, border: '1px solid #d9d9d9', borderRadius: 8 }}>
          <Listy
            items={items}
            height={160}
            rowKey="id"
            itemRender={(item: any) => (
              <div style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
                {item.content}
              </div>
            )}
          />
        </div>
      );
    },
    code: `import { Listy } from 'michael-ui';

export default () => (
  <Listy
    items={[{ id: 1, content: 'Item 1' }]}
    height={200}
    rowKey="id"
    itemRender={item => <div>{item.content}</div>}
  />
);`,
  },
};
