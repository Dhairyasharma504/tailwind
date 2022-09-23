import React from 'react';
import Layout from '../components/Layout';
import Content from '../components/elements/Content';

const technology = () => {
  return (
    <div>
      <Layout>
        <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
          <p className="mt-5 text-xs font-medium text-blue-600 uppercase text-center">
            Technology
          </p>
          <Content title="Architectural Engineering Wonders of the modern era for your Inspiration"></Content>
        </div>
      </Layout>
    </div>
  );
};

export default technology;
