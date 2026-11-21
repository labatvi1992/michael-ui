import { defineConfig } from 'tsup';
import glob from 'fast-glob';

export default defineConfig(async () => {
  const localeFiles = await glob('components/locale/*.ts', {
    ignore: ['components/locale/__tests__/**'],
  });

  return {
    entry: {
      index: 'components/index.ts',
      ...Object.fromEntries(
        localeFiles.map((file) => {
          const name = file.replace(/^components\//, '').replace(/\.ts$/, '');
          return [name, file];
        }),
      ),
    },
    format: ['esm', 'cjs'],
    dts: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    splitting: false,
    external: [
      'react',
      'react-dom',
      'dayjs',
      '@ant-design/colors',
      '@ant-design/cssinjs',
      '@ant-design/cssinjs-utils',
      '@ant-design/fast-color',
      '@ant-design/icons',
      '@rc-component/cascader',
      '@rc-component/checkbox',
      '@rc-component/collapse',
      '@rc-component/color-picker',
      '@rc-component/dialog',
      '@rc-component/drawer',
      '@rc-component/dropdown',
      '@rc-component/form',
      '@rc-component/image',
      '@rc-component/input',
      '@rc-component/input-number',
      '@rc-component/listy',
      '@rc-component/mentions',
      '@rc-component/menu',
      '@rc-component/motion',
      '@rc-component/mutate-observer',
      '@rc-component/notification',
      '@rc-component/pagination',
      '@rc-component/picker',
      '@rc-component/progress',
      '@rc-component/qrcode',
      '@rc-component/rate',
      '@rc-component/resize-observer',
      '@rc-component/segmented',
      '@rc-component/select',
      '@rc-component/slider',
      '@rc-component/steps',
      '@rc-component/switch',
      '@rc-component/table',
      '@rc-component/tabs',
      '@rc-component/tooltip',
      '@rc-component/tour',
      '@rc-component/tree',
      '@rc-component/tree-select',
      '@rc-component/trigger',
      '@rc-component/upload',
      '@rc-component/util',
    ],
    esbuildOptions(options) {
      options.banner = {
        js: '"use client";',
      };
    },
    outDir: 'dist',
  };
});
