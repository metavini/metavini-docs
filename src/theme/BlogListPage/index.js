import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import Head from '@docusaurus/Head';

export default function BlogListPageWrapper(props) {
  return (
    <>
      <Head>
        <meta property="og:image" content="https://docs.metavini.com/img/logos/logo-dark.png" data-rh="true"/>
        <meta name="twitter:image" content="https://docs.metavini.com/img/logos/logo-dark.png" data-rh="true"/>
      </Head>
      <BlogListPage {...props} />
    </>
  );
}
