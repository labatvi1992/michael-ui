import React, { Suspense, useState } from 'react';
import { theme } from 'antd';

import useLocale from '../../hooks/useLocale';
import LazyPromptDrawer from '../../theme/common/ThemeSwitch/LazyPromptDrawer';
import SiteContext from '../../theme/slots/SiteContext';
import type { SiteContextProps } from '../../theme/slots/SiteContext';
import BannerRecommends from './components/BannerRecommends';
import Group from './components/Group';
import PreviewBanner from './components/PreviewBanner';
import ThemePreview from './components/ThemePreview';

const ComponentsList = React.lazy(() => import('./components/ComponentsList'));
// const Theme = React.lazy(() => import('./components/Theme'));

const locales = {
  cn: {
    assetsTitle: '组件丰富，选用自如',
    assetsDesc: '大量实用组件满足你的需求，灵活定制与拓展',
  },
  en: {
    assetsTitle: 'Rich components',
    assetsDesc: 'Practical components to meet your needs, flexible customization and expansion',
  },
};

const Homepage: React.FC = () => {
  const [locale] = useLocale(locales);
  const { token } = theme.useToken();

  const [promptDrawerOpen, setPromptDrawerOpen] = useState(false);
  const siteContext = React.use(SiteContext);

  const handlePromptDrawerOpen = () => setPromptDrawerOpen(true);
  const handlePromptDrawerClose = () => setPromptDrawerOpen(false);
  const handleThemeChange = (themeConfig: SiteContextProps['dynamicTheme']) => {
    if (siteContext?.updateSiteConfig) {
      siteContext.updateSiteConfig({ dynamicTheme: themeConfig });
    }
  };

  return (
    <section>
      <PreviewBanner>
        <BannerRecommends />
      </PreviewBanner>

      <ThemePreview onOpenPromptDrawer={handlePromptDrawerOpen} />

      {/* AI 生成主题抽屉 */}
      <LazyPromptDrawer
        open={promptDrawerOpen}
        onClose={handlePromptDrawerClose}
        onThemeChange={handleThemeChange}
      />

      {/* 组件列表 */}
      <Group
        background={token.colorBgElevated}
        collapse
        title={locale.assetsTitle}
        description={locale.assetsDesc}
        id="design"
      >
        <Suspense fallback={null}>
          <ComponentsList />
        </Suspense>
      </Group>

    </section>
  );
};

export default Homepage;
