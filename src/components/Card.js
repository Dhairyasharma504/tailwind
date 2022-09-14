import React from 'react';
import CardHero from './CardHero';

const Card = ({ data }) => {
  return (
    <div className="container mx-auto px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data &&
          data.slice(0, 2).map((item) => {
            return <CardHero key={item.text} item={item} />;
          })}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data &&
          data.slice(2).map((item) => {
            return <CardHero key={item.text} item={item} />;
          })}
      </div>
    </div>
  );
};

export default Card;
