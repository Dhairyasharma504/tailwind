import React from 'react';
import Navbar from '../components/Navbar';
import CardHero from '../components/CardHero';
import Card from '../components/Card';
const data = [
  { text: 'he;lwjekjve', image: '/images/logo.png', link: '/' },
  { text: 'he;lwjekjve', image: '/images/logo.png', link: '/' },
  { text: 'he;lwjekjve', image: '/images/logo.png', link: '/' },
  { text: 'he;lwjekjve', image: '/images/logo.png', link: '/' },
  { text: 'he;lwjekjve', image: '/images/logo.png', link: '/' },
  { text: 'he;lwjekjve', image: '/images/logo.png', link: '/' },
  { text: 'he;lwjekjve', image: '/images/logo.png', link: '/' },
  { text: 'he;lwjekjve', image: '/images/logo.png', link: '/' },
];

const Index = () => {
  return (
    <div>
      <Navbar />
      <Card data={data} />
    </div>
  );
};

export default Index;
