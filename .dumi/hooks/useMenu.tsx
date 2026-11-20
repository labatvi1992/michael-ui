import React, { useMemo } from 'react';
import type { MenuProps, TagProps } from 'antd';
import { Flex, Tag, version } from 'antd';
import { createStaticStyles } from 'antd-style';
import { clsx } from 'clsx';
import { useSidebarData } from 'dumi';

import Link from '../theme/common/Link';
import useLocale from './useLocale';
import useLocation from './useLocation';

const locales = {
  cn: {
    deprecated: '废弃',
    updated: '更新',
    new: '新增',
  },
  en: {
    deprecated: 'DEPRECATED',
    updated: 'UPDATED',
    new: 'NEW',
  },
};

const getTagColor = (val?: string): TagProps['color'] => {
  switch (val?.toUpperCase()) {
    case 'UPDATED':
      return 'processing';
    case 'DEPRECATED':
      return 'red';
    default:
      return 'success';
  }
};

const styles = createStaticStyles(({ css, cssVar }) => ({
  link: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  tag: css`
    margin-inline-end: 0;
  `,
  subtitle: css`
    font-weight: normal;
    font-size: ${cssVar.fontSizeSM};
    opacity: 0.8;
    margin-inline-start: ${cssVar.marginSM};
  `,
}));

interface MenuItemLabelProps {
  before?: React.ReactNode;
  after?: React.ReactNode;
  link: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  search?: string;
  tag?: string;
  className?: string;
}

const MenuItemLabelWithTag: React.FC<MenuItemLabelProps> = (props) => {
  const { before, after, link, title, subtitle, search, tag, className } = props;

  const [locale] = useLocale<string>(locales);

  const getLocale = (name: string) => {
    return locale[name.toLowerCase()] ?? name;
  };

  if (!before && !after) {
    return (
      <Link to={`${link}${search}`} className={clsx(className, { [styles.link]: tag })}>
        <Flex justify="flex-start" align="center">
          {title && <span>{title}</span>}
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </Flex>
        {tag && (
          <Tag variant="filled" className={clsx(styles.tag)} color={getTagColor(tag)}>
            {getLocale(tag.replace(/VERSION/i, version))}
          </Tag>
        )}
      </Link>
    );
  }
  return (
    <Link to={`${link}${search}`} className={className}>
      {before}
      {title}
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      {after}
    </Link>
  );
};

export interface UseMenuOptions {
  before?: React.ReactNode;
  after?: React.ReactNode;
}

const useMenu = (options: UseMenuOptions = {}): readonly [MenuProps['items'], string] => {
  const { pathname, search } = useLocation();
  const sidebarData = useSidebarData();
  const { before, after } = options;

  const menuItems = useMemo<MenuProps['items']>(() => {
    return (
      sidebarData?.reduce<Exclude<MenuProps['items'], undefined>>((result, group) => {
        if (group?.title) {
          result.push({
            type: 'group',
            label: group?.title,
            key: group?.title,
            children: group.children?.map((item) => ({
              label: (
                <MenuItemLabelWithTag
                  before={before}
                  after={after}
                  link={item.link}
                  title={item?.title}
                  subtitle={item.frontmatter?.subtitle}
                  search={search}
                  tag={item.frontmatter?.tag}
                />
              ),
              key: item.link.replace(/(-cn$)/g, ''),
            })),
          });
        } else {
          const list = group.children || [];
          // 如果有 date 字段，我们就对其进行排序
          if (list.every((info) => info?.frontmatter?.date)) {
            list.sort((a, b) => (a.frontmatter?.date > b.frontmatter?.date ? -1 : 1));
          }
          result.push(
            ...list.map((item) => ({
              label: (
                <MenuItemLabelWithTag
                  before={before}
                  after={after}
                  link={item.link}
                  title={item?.title}
                  search={search}
                  tag={item.frontmatter?.tag}
                />
              ),
              key: item.link.replace(/(-cn$)/g, ''),
            })),
          );
        }
        return result;
      }, []) ?? []
    );
  }, [sidebarData, search, before, after]);

  return [menuItems, pathname] as const;
};

export default useMenu;
