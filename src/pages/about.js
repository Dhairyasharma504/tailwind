import React from 'react';
import About_page from '../components/About_page';
import Content from '../components/elements/Content';

import Layout from '../components/Layout';

const about = () => {
  return (
    <Layout>
      <Content title="About" subtitle="We are a small passionate team." />
      <About_page />
    </Layout>
  );
};

export default about;
