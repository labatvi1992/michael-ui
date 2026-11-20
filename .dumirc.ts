import os from 'node:os';
import path from 'node:path';
import { defineConfig } from 'dumi';
import * as fs from 'fs-extra';

import rehypeAntd from './.dumi/rehypeAntd';
import rehypeChangelog from './.dumi/rehypeChangelog';
import remarkAntd from './.dumi/remarkAntd';
import { version } from './package.json';

const alibabaSansBoldFont =
  'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*E_cxRbMlZqUAAAAAQuAAAAgAegCCAQ/AlibabaSans-Bold.woff2';

const alibabaSansFonts = [
  {
    weight: 300,
    url: 'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*1GSgSYDD_aIAAAAAQsAAAAgAegCCAQ/AlibabaSans-Light.woff2',
  },
  {
    weight: 400,
    url: 'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*2zEUQqnPNesAAAAAQtAAAAgAegCCAQ/AlibabaSans-Regular.woff2',
  },
  {
    weight: 500,
    url: alibabaSansBoldFont,
  },
  {
    weight: 600,
    url: alibabaSansBoldFont,
  },
  {
    weight: 700,
    url: alibabaSansBoldFont,
  },
] as const;

const alibabaSansFontFaceStyle = alibabaSansFonts
  .map(
    ({ weight, url }) => `
@font-face {
  font-family: 'AlibabaSans';
  font-style: normal;
  font-weight: ${weight};
  font-display: optional;
  src: url('${url}') format('woff2');
}`,
  )
  .join('\n');

const isCloudflarePages = process.env.CF_PAGES === '1';

export default defineConfig({
  plugins: ['dumi-plugin-color-chunk'],

  // For <Link prefetch />
  routePrefetch: {},
  manifest: {},

  sitemap: {
    hostname: 'https://ant.design',
  },

  conventionRoutes: {
    // to avoid generate routes for .dumi/pages/index/components/xx
    exclude: [/index\/components\//],
  },
  ssr:
    process.env.NODE_ENV === 'production'
      ? {
          // Cloudflare Pages may crash utoopack loader child processes with SIGBUS.
          builder: isCloudflarePages ? 'mako' : 'utoopack',
        }
      : false,
  hash: true,
  mfsu: false,
  mako: isCloudflarePages && ['Darwin', 'Linux'].includes(os.type()) ? {} : false,
  utoopack: {
    devServer: {
      lazyDynamicImports: true,
      dynamicHmrChunkLists: true,
    },
    watch: {
      nodeModulesRegexes: ['rc-.*', '.*cssinjs.*', '@rc-component/.*'],
    },
  },
  crossorigin: {},
  runtimePublicPath: {},
  outputPath: '_site',
  favicons: ['https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png'],
  styles: [alibabaSansFontFaceStyle],
  resolve: {
    atomDirs: [{ type: 'component', dir: 'components' }],
    codeBlockMode: 'passive',
  },
  locales: [{ id: 'en-US', name: 'English', suffix: '' }],
  define: {
    antdReproduceVersion: version,
  },
  alias: {
    'antd/lib': path.join(__dirname, 'components'),
    'antd/es': path.join(__dirname, 'components'),
    'antd/locale': path.join(__dirname, 'components/locale'),
    antd: path.join(__dirname, 'components'),
  },
  extraRehypePlugins: [rehypeAntd, rehypeChangelog],
  extraRemarkPlugins: [remarkAntd],
  metas: [
    { name: 'theme-color', content: '#1677ff' },
    { name: 'build-time', content: Date.now().toString() },
    // https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables
    { name: 'build-hash', content: process.env.GITHUB_SHA ?? 'unknown' },
  ],
  analytics: {
    ga_v2: 'UA-72788897-1',
  },
  analyze:
    process.env.NODE_ENV === 'production'
      ? false
      : {
          analyzerPort: 'auto',
        },
  links: alibabaSansFonts
    .filter(({ weight }) => weight === 400 || weight === 600)
    .map(({ url }) => ({
      rel: 'preload',
      as: 'font',
      href: url,
      type: 'font/woff2',
      crossorigin: 'anonymous',
    })),
  headScripts: [`document.documentElement.className += 'en-us';`],
  scripts: [
    {
      async: true,
      content: fs
        .readFileSync(path.join(__dirname, '.dumi', 'scripts', 'mirror-notify.js'))
        .toString(),
    },
    // Only enable clarity in production environment
    process.env.NODE_ENV === 'production'
      ? {
          async: true,
          content: fs
            .readFileSync(path.join(__dirname, '.dumi', 'scripts', 'clarity.js'))
            .toString(),
        }
      : null,
    {
      async: true,
      content: fs.readFileSync(path.join(__dirname, '.dumi', 'scripts', 'webmcp.js')).toString(),
    },
  ].filter((script) => !!script),
});
