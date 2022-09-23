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
      <div class="text-center space-y-4   mt-14 ">
        <h3 className="text-center text-base leading-loose ">
          We provide real-time connectivity to enable software providers and
          financial institutions to build integrated products for their small
          business customers.
        </h3>
        <h3 className="text-center  text-base leading-loose">
          Our API infrastructure is leveraged by clients ranging from lenders to
          corporate card providers and business forecasting tools, with use
          cases including automatic reconciliation, business dashboarding, and
          loan decisioning.
        </h3>
        <div className="text-center   font-semibold">
          <Link href="/contact">
            <a className="underline underline-offset-2">Get in touch</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default about;
