import React from 'react';
import CardHero from './CardHero';

const Card = ({ data }) => {
  return (
    <div className="container mx-auto px-24">
      <div className="flex flex-wrap">
        {data &&
          data.map((item, index) => {
            return (
              <div
                className={
                  index > 1 ? 'md:w-4/12 p-3 w-full' : 'md:w-6/12 w-full p-3'
                }
                key={item.text}
              >
                <CardHero item={item} />
              </div>
            );
          })}
      </div>
      {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data &&
          data.slice(2).map((item) => {
            return <CardHero key={item.text} item={item} />;
          })}
      </div> */}
    </div>
  );
};

export default Card;
