import * as React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import { createStyles } from 'antd-style';
import { useLocation } from 'dumi';

import Link from '../../common/Link';
import * as utils from '../../utils';
import type { SharedProps } from './interface';

// ============================= Style =============================
const useStyle = createStyles(({ cssVar, token, css }) => {
  return {
    nav: css`
      height: 100%;
      font-size: ${cssVar.fontSize};
      font-family: Avenir, ${cssVar.fontFamily}, sans-serif;
      border: 0 !important;

      &${token.antCls}-menu-horizontal {
        border-bottom: none;

        & > ${token.antCls}-menu-item, & > ${token.antCls}-menu-submenu {
          min-width: ${40 + 8 * 2}px;
          height: ${token.headerHeight}px;
          padding-inline-end: 8px;
          padding-inline-start: 8px;
          line-height: ${token.headerHeight}px;
        }

        & ${token.antCls}-menu-submenu-title ${token.iconCls} {
          margin: 0;
        }

        & > ${token.antCls}-menu-item-selected {
          a {
            color: ${cssVar.colorPrimary};
          }
        }
      }

      & > ${token.antCls}-menu-item, & > ${token.antCls}-menu-submenu {
        text-align: center;
      }
    `,
  };
});

export interface NavigationProps extends SharedProps {
  isMobile: boolean;
  responsive: null | 'narrow' | 'crowded';
  directionText: string;
  onDirectionChange: () => void;
}

const HeaderNavigation: React.FC<NavigationProps> = (props) => {
  const { isZhCN, isMobile, responsive, directionText, onDirectionChange } = props;
  const { pathname, search } = useLocation();

  const { styles } = useStyle();

  const menuMode = isMobile ? 'inline' : 'horizontal';

  const module = pathname.split('/').filter(Boolean).slice(0, -1).join('/');
  let activeMenuItem = module || 'home';

  let additional: MenuProps['items'] = [];

  const additionalItems: MenuProps['items'] = [
    {
      label: (
        <a
          href="https://github.com/ant-design/ant-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      ),
      key: 'github',
    },
    {
      label: directionText,
      onClick: onDirectionChange,
      key: 'switch-direction',
    },
  ];

  if (isMobile) {
    additional = additionalItems;
  } else if (responsive === 'crowded') {
    additional = [
      {
        label: <MenuOutlined />,
        key: 'additional',
        children: [...additionalItems],
      },
    ];
  }

  const items: MenuProps['items'] = [
    {
      label: (
        <Link to={utils.getLocalizedPathname('/components/overview/', isZhCN, search)}>
          Components
        </Link>
      ),
      key: 'components',
    },
    isZhCN
      ? {
          key: 'mirror',
          label: (
            <a href="https://ant-design.antgroup.com" target="_blank" rel="noopener noreferrer">
              国内镜像
            </a>
          ),
        }
      : null,
    ...(additional ?? []),
  ].filter(Boolean);

  return (
    // Use `transparent` style since the header already has background
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: 'transparent',
        },
      }}
    >
      <Menu
        mode={menuMode}
        selectedKeys={[activeMenuItem]}
        className={styles.nav}
        disabledOverflow
        items={items}
      />
    </ConfigProvider>
  );
};

export default HeaderNavigation;
