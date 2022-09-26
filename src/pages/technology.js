import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Content from '../components/elements/Content';

const technology = () => {
  return (
    <Layout>
      <div className="">
        <p className="mt-5 text-xs font-medium text-blue-600 uppercase text-center">
          Technology
        </p>
        <Content title="Architectural Engineering Wonders of the modern era for your Inspiration"></Content>
        <div class="flex space-x-4 items-center justify-center">
          <Image
            width="60"
            height="60"
            alt=""
            src="/images/dp1.webp"
            class="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div class="flex flex-col space-y-1">
            <a rel="noopener noreferrer" href="#" class="text-sm font-semibold">
              Leroy Jenkins
            </a>
            <div className="flex items-center space-x-2">
              <span class="text-xs dark:text-gray-400">May 20, 2022</span>
              <span class="text-xs text-gray-300 dark:text-gray-600">•</span>
              <span class="text-xs dark:text-gray-400">8 min read</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default technology;
