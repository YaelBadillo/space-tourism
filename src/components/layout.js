import Head from 'next/head';

import { css } from '@emotion/react';

const layoutCss = {
  wrapper: css({
    backgroundImage: 'var(--image)',
    width: '100%',
    height: '100%'
  }),
};

const Layout = ({ children }) => {
  return (
    <div css={layoutCss.wrapper} style={{ '--image': '#000' }}>
      <Head>

      </Head>
      aaaaa
      
    </div>
  );
};

export default Layout;