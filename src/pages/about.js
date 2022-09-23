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
      <div className="text container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg ">
        <h3 className="text-center py-4 text-base leading-loose ">
          We provide real-time connectivity to enable software providers and
          financial institutions to build integrated products for their small
          business customers.
        </h3>
        <h3 className="text-center py-1 text-base leading-loose">
          Our API infrastructure is leveraged by clients ranging from lenders to
          corporate card providers and business forecasting tools, with use
          cases including automatic reconciliation, business dashboarding, and
          loan decisioning.
        </h3>
        <div className="text-center p-2  font-semibold">
          <Link href="/">
            <a className="">Get in touch</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default about;
