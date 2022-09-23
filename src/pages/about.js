import Link from 'next/link';
import React from 'react';
import About_page from '../components/About_page';
import Content from '../components/elements/Content';

import Layout from '../components/Layout';

const about = () => {
  return (
    <Layout>
      <Content title="About" subtitle="We are a small passionate team." />
      <About_page />
      <h3 className="text-center py-8 ">
        We provide real-time connectivity to enable software providers and
        financial institutions to build integrated products for their small
        business customers.
      </h3>
      <h3 className="text-center py-4 ">
        Our API infrastructure is leveraged by clients ranging from lenders to
        corporate card providers and business forecasting tools, with use cases
        including automatic reconciliation, business dashboarding, and loan
        decisioning.
      </h3>
      <div className="text-center ">
        <Link href="/">
          <a className="">Get in touch</a>
        </Link>
      </div>
    </Layout>
  );
};

export default about;
