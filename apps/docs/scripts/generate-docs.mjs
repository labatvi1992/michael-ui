import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '../../..');
const COMP_DIR = path.join(ROOT, 'packages/michael-ui/components');
const OUT_DIR = path.join(ROOT, 'apps/docs/content/docs/components');

// Taxonomy mapping
const TAXONOMY = {
  // General
  button: { category: 'General', title: 'Button', order: 1 },
  'float-button': { category: 'General', title: 'FloatButton', order: 2 },
  icon: { category: 'General', title: 'Icon', order: 3 },
  typography: { category: 'General', title: 'Typography', order: 4 },

  // Layout
  divider: { category: 'Layout', title: 'Divider', order: 5 },
  flex: { category: 'Layout', title: 'Flex', order: 6 },
  grid: { category: 'Layout', title: 'Grid', order: 7 },
  layout: { category: 'Layout', title: 'Layout', order: 8 },
  masonry: { category: 'Layout', title: 'Masonry', order: 9 },
  space: { category: 'Layout', title: 'Space', order: 10 },
  splitter: { category: 'Layout', title: 'Splitter', order: 11 },

  // Navigation
  affix: { category: 'Navigation', title: 'Affix', order: 11 },
  anchor: { category: 'Navigation', title: 'Anchor', order: 12 },
  breadcrumb: { category: 'Navigation', title: 'Breadcrumb', order: 13 },
  dropdown: { category: 'Navigation', title: 'Dropdown', order: 14 },
  menu: { category: 'Navigation', title: 'Menu', order: 15 },
  pagination: { category: 'Navigation', title: 'Pagination', order: 16 },
  steps: { category: 'Navigation', title: 'Steps', order: 17 },

  // Data Entry
  'auto-complete': { category: 'Data Entry', title: 'AutoComplete', order: 18 },
  cascader: { category: 'Data Entry', title: 'Cascader', order: 19 },
  checkbox: { category: 'Data Entry', title: 'Checkbox', order: 20 },
  'color-picker': { category: 'Data Entry', title: 'ColorPicker', order: 21 },
  'date-picker': { category: 'Data Entry', title: 'DatePicker', order: 22 },
  form: { category: 'Data Entry', title: 'Form', order: 23 },
  input: { category: 'Data Entry', title: 'Input', order: 24 },
  'input-number': { category: 'Data Entry', title: 'InputNumber', order: 25 },
  mentions: { category: 'Data Entry', title: 'Mentions', order: 26 },
  radio: { category: 'Data Entry', title: 'Radio', order: 27 },
  rate: { category: 'Data Entry', title: 'Rate', order: 28 },
  select: { category: 'Data Entry', title: 'Select', order: 29 },
  slider: { category: 'Data Entry', title: 'Slider', order: 30 },
  switch: { category: 'Data Entry', title: 'Switch', order: 31 },
  'time-picker': { category: 'Data Entry', title: 'TimePicker', order: 32 },
  transfer: { category: 'Data Entry', title: 'Transfer', order: 33 },
  'tree-select': { category: 'Data Entry', title: 'TreeSelect', order: 34 },
  upload: { category: 'Data Entry', title: 'Upload', order: 35 },

  // Data Display
  avatar: { category: 'Data Display', title: 'Avatar', order: 36 },
  badge: { category: 'Data Display', title: 'Badge', order: 37 },
  calendar: { category: 'Data Display', title: 'Calendar', order: 38 },
  card: { category: 'Data Display', title: 'Card', order: 39 },
  carousel: { category: 'Data Display', title: 'Carousel', order: 40 },
  collapse: { category: 'Data Display', title: 'Collapse', order: 41 },
  descriptions: { category: 'Data Display', title: 'Descriptions', order: 42 },
  empty: { category: 'Data Display', title: 'Empty', order: 43 },
  image: { category: 'Data Display', title: 'Image', order: 44 },
  list: { category: 'Data Display', title: 'List', order: 45 },
  listy: { category: 'Data Display', title: 'Listy', order: 46 },
  popover: { category: 'Data Display', title: 'Popover', order: 47 },
  'qr-code': { category: 'Data Display', title: 'QRCode', order: 47 },
  segmented: { category: 'Data Display', title: 'Segmented', order: 48 },
  statistic: { category: 'Data Display', title: 'Statistic', order: 49 },
  table: { category: 'Data Display', title: 'Table', order: 50 },
  tabs: { category: 'Data Display', title: 'Tabs', order: 51 },
  tag: { category: 'Data Display', title: 'Tag', order: 52 },
  timeline: { category: 'Data Display', title: 'Timeline', order: 53 },
  tooltip: { category: 'Data Display', title: 'Tooltip', order: 54 },
  tour: { category: 'Data Display', title: 'Tour', order: 55 },
  tree: { category: 'Data Display', title: 'Tree', order: 56 },

  // Feedback
  alert: { category: 'Feedback', title: 'Alert', order: 57 },
  drawer: { category: 'Feedback', title: 'Drawer', order: 58 },
  message: { category: 'Feedback', title: 'Message', order: 59 },
  modal: { category: 'Feedback', title: 'Modal', order: 60 },
  notification: { category: 'Feedback', title: 'Notification', order: 61 },
  popconfirm: { category: 'Feedback', title: 'Popconfirm', order: 62 },
  progress: { category: 'Feedback', title: 'Progress', order: 63 },
  result: { category: 'Feedback', title: 'Result', order: 64 },
  skeleton: { category: 'Feedback', title: 'Skeleton', order: 65 },
  spin: { category: 'Feedback', title: 'Spin', order: 66 },
  watermark: { category: 'Feedback', title: 'Watermark', order: 67 },

  // Other
  app: { category: 'Other', title: 'App', order: 68 },
  'config-provider': { category: 'Other', title: 'ConfigProvider', order: 69 },
  'border-beam': { category: 'Other', title: 'BorderBeam', order: 70 },
};

const COMPONENT_EXAMPLES = {
  button: [
    { title: 'Color & Variants', demo: 'button-variants' },
    { title: 'Button Sizes', demo: 'button-sizes' },
    { title: 'Loading State', demo: 'button-loading' },
    { title: 'Danger & Ghost Buttons', demo: 'button-danger' },
    { title: 'Block Button', demo: 'button-block' },
    { title: 'Buttons with Icons', demo: 'button-icon' },
  ],
  input: [
    { title: 'Input Sizes', demo: 'input-sizes' },
    { title: 'Addon & Pre/Suffix', demo: 'input-addon' },
    { title: 'Password Input', demo: 'input-password' },
    { title: 'Search Input', demo: 'input-search' },
    { title: 'TextArea with Count', demo: 'input-textarea' },
    { title: 'Status & Validation', demo: 'input-status' },
  ],
  table: [
    { title: 'Row Selection', demo: 'table-selection' },
    { title: 'Sorting & Filters', demo: 'table-sorting' },
    { title: 'Compact & Bordered Table', demo: 'table-size' },
  ],
  select: [
    { title: 'Multiple & Tags Mode', demo: 'select-multiple' },
    { title: 'Searchable Select', demo: 'select-search' },
    { title: 'Status & Sizes', demo: 'select-status' },
  ],
  modal: [
    { title: 'Asynchronous Loading Modal', demo: 'modal-async' },
    { title: 'Confirmation Dialog', demo: 'modal-confirm' },
  ],
  card: [
    { title: 'Card Grid Layout', demo: 'card-grid' },
    { title: 'Card with Meta & Cover', demo: 'card-meta' },
  ],
  form: [
    { title: 'Form Layouts', demo: 'form-layout' },
    { title: 'Validation Rules', demo: 'form-validation' },
  ],
  alert: [
    { title: 'Alert with Description', demo: 'alert-description' },
    { title: 'Closable Alert Banner', demo: 'alert-closable' },
  ],
  tabs: [
    { title: 'Card Style Tabs', demo: 'tabs-card' },
    { title: 'Tabs with Icons', demo: 'tabs-icon' },
  ],
  badge: [
    { title: 'Status Dot Badge', demo: 'badge-status' },
    { title: 'Ribbon Badge', demo: 'badge-ribbon' },
  ],
  progress: [
    { title: 'Circular & Dashboard Progress', demo: 'progress-circle' },
  ],
  statistic: [
    { title: 'Countdown Timer', demo: 'statistic-countdown' },
  ],
  avatar: [
    { title: 'Avatar Group', demo: 'avatar-group' },
  ],
  'date-picker': [
    { title: 'RangePicker', demo: 'date-picker-range' },
  ],
  tag: [
    { title: 'Colorful Preset Tags', demo: 'tag-colors' },
    { title: 'Checkable Tag', demo: 'tag-checkable' },
  ],
  switch: [
    { title: 'Switch with Text & Icons', demo: 'switch-text' },
  ],
  slider: [
    { title: 'Range Slider with Marks', demo: 'slider-range' },
  ],
  collapse: [
    { title: 'Accordion Collapse', demo: 'collapse-accordion' },
  ],
  tooltip: [
    { title: 'Tooltip Placements', demo: 'tooltip-placement' },
  ],
  popover: [
    { title: 'Popover Triggers', demo: 'popover-trigger' },
  ],
  popconfirm: [
    { title: 'Async Popconfirm', demo: 'popconfirm-async' },
  ],
  drawer: [
    { title: 'Drawer Placements', demo: 'drawer-placement' },
  ],
  spin: [
    { title: 'Spin Container', demo: 'spin-container' },
  ],
  skeleton: [
    { title: 'Complex Skeleton Loading', demo: 'skeleton-complex' },
  ],
  result: [
    { title: '404 Result Page', demo: 'result-404' },
  ],
  'float-button': [
    { title: 'FloatButton.BackTop', demo: 'float-button-backtop' },
  ],
  breadcrumb: [
    { title: 'Breadcrumb with Icons', demo: 'breadcrumb-icon' },
  ],
  divider: [
    { title: 'Vertical Divider', demo: 'divider-vertical' },
  ],
  typography: [
    { title: 'Interactive Typography', demo: 'typography-interactive' },
  ],
};

function sanitizeMdx(text) {
  if (!text) return '';

  // 1. Remove custom Dumi tags, styles, and comments
  let cleaned = text
    .replace(/<ComponentTokenTable[^>]*>[\s\S]*?<\/ComponentTokenTable>/g, '')
    .replace(/<ComponentTokenTable[^>]*\/?>/g, '')
    .replace(/<InlinePopover[^>]*>/g, '')
    .replace(/<\/InlinePopover>/g, '')
    .replace(/<style>[\s\S]*?<\/style>/g, '')
    .replace(/<style\s+module>[\s\S]*?<\/style>/g, '')
    .replace(/<!-- prettier-ignore -->/g, '')
    .replace(/<code\s+src=[^>]*>[\s\S]*?<\/code>/g, '')
    .replace(/<code\s+src=[^>]*\/?>/g, '');

  // 2. Protect existing code spans (`...` and ```...```)
  const codeBlocks = [];
  cleaned = cleaned.replace(/(```[\s\S]*?```|`[^`\n]+`)/g, (match) => {
    codeBlocks.push(match);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  // 3. In the remaining prose and tables:
  // Escape { and } so Acorn doesn't parse them as JS expressions
  cleaned = cleaned.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');

  // Escape < and > so MDX doesn't parse them as JSX tags
  cleaned = cleaned.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // 4. Restore code blocks
  cleaned = cleaned.replace(/__CODE_BLOCK_(\d+)__/g, (_, idx) => {
    return codeBlocks[Number(idx)];
  });

  return cleaned.trim();
}

function run() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  // 1. Create components/index.mdx
  const indexMdx = `---
title: Components
description: All 72 enterprise React components in Michael UI with live interactive demos, responsive theming, and comprehensive API documentation.
---

Welcome to the **Michael UI** component library. Explore all 72 enterprise components below with interactive live demos reacting in real-time to the **Theme Customizer** (light/dark mode, compact density, primary color, border radius).

<ComponentsCatalog />

## Component Taxonomy

Michael UI organizes components into standard enterprise design categories:

- **General (4)**: Buttons, FloatButton, Icons, and Typography for essential triggers and text rendering.
- **Layout (7)**: Grid, Flex, Layout, Masonry, Space, and Splitter for robust application scaffolding.
- **Navigation (7)**: Affix, Anchor, Breadcrumb, Dropdown, Menu, Pagination, and Steps.
- **Data Entry (18)**: Forms, Inputs, Selects, DatePickers, Sliders, and advanced data input controls.
- **Data Display (22)**: Tables, Cards, Avatars, Badges, List, Listy, Trees, and Visualizers.
- **Feedback (11)**: Alerts, Modals, Drawers, Messages, Progress bars, and Spinners.
- **Other (3)**: App, ConfigProvider, and BorderBeam for global configuration and visual effects.
`;
  fs.writeFileSync(path.join(OUT_DIR, 'index.mdx'), indexMdx, 'utf8');

  // 2. Generate component MDX files
  const metaPages = ['index'];
  const currentCategory = {};

  const sortedKeys = Object.keys(TAXONOMY).sort((a, b) => TAXONOMY[a].order - TAXONOMY[b].order);

  // Group headers tracking
  let lastCategory = '';

  for (const key of sortedKeys) {
    const meta = TAXONOMY[key];

    if (meta.category !== lastCategory) {
      metaPages.push(`---${meta.category}---`);
      lastCategory = meta.category;
    }
    metaPages.push(key);

    const compDir = path.join(COMP_DIR, key);
    const mdPath = path.join(compDir, 'index.en-US.md');

    let title = meta.title;
    let description = `${title} component for React applications.`;
    let whenToUse = '';
    let api = '';

    if (fs.existsSync(mdPath)) {
      const rawContent = fs.readFileSync(mdPath, 'utf8');

      const titleMatch = rawContent.match(/^title:\s*(.+)$/m);
      if (titleMatch) title = titleMatch[1].trim();

      const descMatch = rawContent.match(/^description:\s*(.+)$/m);
      if (descMatch) description = descMatch[1].trim();

      const whenMatch = rawContent.match(/## When To Use\s*\n+([\s\S]*?)(?=\n## |$)/);
      if (whenMatch) {
        whenToUse = sanitizeMdx(whenMatch[1]);
      }

      const apiMatch = rawContent.match(/## API\s*\n+([\s\S]*?)(?=\n## (?:Semantic DOM|Design Token|FAQ|Design Guide)|$)/);
      if (apiMatch) {
        api = sanitizeMdx(apiMatch[1]);
      }
    }

    const examples = COMPONENT_EXAMPLES[key] || [];

    const docContent = `---
title: ${title}
description: ${description.replace(/"/g, '\\"')}
---

## Interactive Demo

Experience the live interactive demo below. Change the primary color, border radius, or toggle Dark / Compact mode from the **Theme Customizer** in the top navigation to see this component adapt in real-time.

<ComponentDemo name="${key}" />

## Usage

\`\`\`tsx
import { ${title} } from 'michael-ui';

export default () => {
  return <${title} />;
};
\`\`\`
${
  examples.length > 0
    ? `
## Examples

${examples
  .map(
    (ex) => `### ${ex.title}

<ComponentDemo name="${ex.demo}" />`
  )
  .join('\n\n')}
`
    : ''
}
${
  whenToUse
    ? `
## When To Use

${whenToUse}
`
    : ''
}
${
  api
    ? `
## API Reference

${api}
`
    : ''
}
`;

    fs.writeFileSync(path.join(OUT_DIR, `${key}.mdx`), docContent, 'utf8');
  }

  // 3. Write components/meta.json
  const metaJson = {
    title: 'Components',
    pages: metaPages,
  };
  fs.writeFileSync(path.join(OUT_DIR, 'meta.json'), JSON.stringify(metaJson, null, 2), 'utf8');

  console.log(`Generated ${sortedKeys.length} component docs + index.mdx + meta.json successfully!`);
}

run();
