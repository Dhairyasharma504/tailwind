import React from 'react';

const CardHero = ({ item }) => {
  if (!item) return null;
  return (
    <div className="rounded-md">
      <img
        src={item.image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />

      <text className="inline-block mt-5 text-xs font-medium tracking-wider uppercase  text-blue-600 items-left justify-left">
        {item.button}
      </text>

      <h2 className="text-lg font-semibold flex items-left justify-left mt-1">
        {item.text}
      </h2>
      <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
        <div class="flex items-center gap-3">
          <img
            alt=""
            src={item.dp_image}
            className="object-cover w-8 h-8 rounded-full shadow dark:bg-gray-500"
          />
        </div>

        <p className=" text-sm font-medium ">{item.dp_name}</p>
        <p className="text-sm font-medium ">{item.date}</p>
      </div>
    </div>
  );
};

export default CardHero;
