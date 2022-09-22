import React from 'react';
import Layout from '../components/Layout';
import Content from '../components/elements/Content';
import CardHero from '../components/CardHero';

const data = [
  {
    text: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    image: '/images/building.webp',
    link: '/',
    button: 'TECHNOLOGY',
    dp_name: 'Mario Sanchez',
    date: 'May 20, 2022',
    dp_image: '/images/dp1.webp',
  },
  {
    text: '5 Effective Brain Recharging Activities No One is Talking About',
    image: '/images/water.webp',
    link: '/',
    button: 'LIFESTYLE',
    dp_name: 'Joshua Wood',
    date: 'june 30, 2022',
    dp_image: '/images/dp2.webp',
  },
  {
    text: '10 Simple Practices That Will Help You Get 1% Better Every Day',
    image: '/images/leaf.webp',
    link: '/',
    button: 'PERSONAL GROWTH',
    dp_name: 'Erika Oliver',
    date: 'july 20, 2022',
    dp_image: '/images/dp3.webp',
  },
  {
    text: 'Every Artist has to see the Amazing Pictures on the Internet',
    image: '/images/design.webp',
    link: '/',
    button: 'DESIGN',
    dp_name: 'Mario Sanchez',
    date: 'August 20, 2022',
    dp_image: '/images/dp2.webp',
  },
  {
    text: 'How Technology Evolved Under the Bright Sun of Universe',
    image: '/images/technology.webp',
    link: '/',
    button: 'TECHNOLOGY',
    dp_name: 'Mario Sanchez',
    date: 'september 20, 2022',
    dp_image: '/images/dp1.webp',
  },
  {
    text: 'Lessons Of Happiness I learned from a Mountain Village',
    image: '/images/travel.webp',
    link: '/',
    button: 'TRAVEL',
    dp_name: 'Joshua Wood',
    date: 'May 20, 2022',
    dp_image: '/images/dp3.webp',
  },
  {
    text: 'There’s Nothing New About Undermining Women’s Autonomy',
    image: '/images/lifestyle.webp',
    link: '/',
    button: 'LIFESTYLE',
    dp_name: 'Erika Oliver',
    date: 'May 20, 2022',
    dp_image: '/images/dp1.webp',
  },
  {
    text: 'Escape Fantasies of the Tech Billionaires',
    image: '/images/technology1.webp',
    link: '/',
    button: 'technology',
    dp_name: 'Erika Oliver',
    date: 'May 20, 2022',
    dp_image: '/images/dp2.webp',
  },
];

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
