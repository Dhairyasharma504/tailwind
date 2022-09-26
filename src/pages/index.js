import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import data from '../utils/data';
const Index = () => {
  return (
    <Layout>
      <div className="">
        <Card data={data} />
      </div>
    </Layout>
  );
};

export default Index;
