import React from 'react';
import CardHero from './CardHero';
import { sortBy } from 'lodash';

const Card = ({ data }) => {
  const orderedData = sortBy(data, ['data.order']);
  console.log(orderedData, 'orderedData');
  return (
    <div className="">
      <div className="flex flex-wrap">
        {orderedData &&
          orderedData.map((item, index) => {
            return (
              <div
                className={
                  index > 1 ? 'md:w-4/12 p-6 w-full' : 'md:w-6/12 w-full p-6'
                }
                key={item.data.text}
              >
                <CardHero item={item.data} />
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
