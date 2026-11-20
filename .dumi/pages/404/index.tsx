import React, { useEffect } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { useLocation } from 'dumi';

import Link from '../../theme/common/Link';
import * as utils from '../../theme/utils';

export interface NotFoundProps {
  router: {
    push: (pathname: string) => void;
    replace: (pathname: string) => void;
  };
}

const NotFoundPage: React.FC<NotFoundProps> = ({ router }) => {
  const { pathname } = useLocation();

  const isZhCN = utils.isZhCN(pathname);

  useEffect(() => {
    if (pathname.startsWith('/docs/') || pathname.startsWith('/changelog')) {
      router.replace('/components/overview');
    }

    // Report if necessary
    const { yuyanMonitor } = window as any;
    yuyanMonitor?.log({
      code: 11,
      msg: `Page not found: ${location.href}; Source: ${document.referrer}`,
    });
  }, [isZhCN, pathname, router]);

  return (
    <Result
      status="404"
      title="404"
      subTitle={isZhCN ? '你访问的页面貌似不存在？' : 'Sorry, the page you visited does not exist.'}
      extra={
        <Link to={utils.getLocalizedPathname('/', isZhCN)}>
          <Button type="primary" icon={<HomeOutlined />}>
            {isZhCN ? '返回 Ant Design 首页' : 'Back to home page'}
          </Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
