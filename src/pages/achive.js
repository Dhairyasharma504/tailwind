import React from 'react';
import Layout from '../components/Layout';
import Content from '../components/elements/Content';
import CardHero from '../components/CardHero';
import data from '../utils/data';

const Achive = () => {
  return (
    <Layout>
      <Content title="Achive" subtitle="See all posts we have ever written." />
      <div className="flex flex-wrap">
        {data &&
          data.map((item, index) => {
            return (
              <div
                className={
                  index > 1 ? 'md:w-4/12 p-6 w-full' : 'md:w-4/12 w-full p-6'
                }
                key={item.text}
              >
                <CardHero item={item} />
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default Achive;
