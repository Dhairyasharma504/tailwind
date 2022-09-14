import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';
const data = [
  {
    text: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    image: '/images/logo.png',
    link: '/',
    button: 'TECHNOLOGY',
    dp_name: 'Mario Sanchez',
    date: 'May 20, 2022',
  },
  {
    text: '5 Effective Brain Recharging Activities No One is Talking About',
    image: '/images/logo.png',
    link: '/',
    button: 'LIFESTYLE',
    dp_name: 'Joshua Wood',
    date: 'june 30, 2022',
  },
  {
    text: '10 Simple Practices That Will Help You Get 1% Better Every Day',
    image: '/images/logo.png',
    link: '/',
    button: 'PERSONAL GROWTH',
    dp_name: 'Erika Oliver',
    date: 'May 20, 2022',
  },
  {
    text: 'Every Artist has to see the Amazing Pictures on the Internet',
    image: '/images/logo.png',
    link: '/',
    button: 'DESIGN',
    dp_name: 'Mario Sanchez',
    date: 'May 20, 2022',
  },
  {
    text: 'How Technology Evolved Under the Bright Sun of Universe',
    image: '/images/logo.png',
    link: '/',
    button: 'TECHNOLOGY',
    dp_name: 'Mario Sanchez',
    date: 'May 20, 2022',
  },
  {
    text: 'Lessons Of Happiness I learned from a Mountain Village',
    image: '/images/logo.png',
    link: '/',
    button: 'TRAVEL',
    dp_name: 'Joshua Wood',
    date: 'May 20, 2022',
  },
  {
    text: 'There’s Nothing New About Undermining Women’s Autonomy',
    image: '/images/logo.png',
    link: '/',
    button: 'LIFESTYLE',
    dp_name: 'Erika Oliver',
    date: 'May 20, 2022',
  },
  {
    text: 'Escape Fantasies of the Tech Billionaires',
    image: '/images/logo.png',
    link: '/',
    button: 'technology',
    dp_name: 'Erika Oliver',
    date: 'May 20, 2022',
  },
];

const Index = () => {
  return (
    <div>
      <Navbar />
      <Card data={data} />
      <Footer />
    </div>
  );
};

export default Index;
