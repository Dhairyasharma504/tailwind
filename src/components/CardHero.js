import React from 'react';

const CardHero = ({ item }) => {
  if (!item) return null;
  return (
    <div className="rounded-md h-90 ">
      <img
        src={item.image}
        alt={item.title}
        className="object-cover object-center w-full rounded h-72 dark:bg-gray-500 hover:scale-105 transition-all duration-500 cursor-pointer"
      />

      <p className="inline-block mt-5 text-xs font-medium text-blue-600 uppercase  items-left justify-left">
        {item.button}
      </p>

      <h2 className="text-lg font-semibold flex items-left justify-left mt-1">
        {item.text}
      </h2>
      <div className="flex items-center mt-3 space-x-3 text-gray-500 ">
        <div class="flex items-center gap-5">
          <img
            alt=""
            src={item.dp_image}
            className="object-cover w-8 h-8 rounded-full shadow dark:bg-gray-500"
          />
        </div>

        <p className=" text-sm font-medium ">{item.dp_name}</p>
        <span class="text-xs text-gray-300 dark:text-gray-600">•</span>
        <p className="text-sm font-medium ">{item.date}</p>
      </div>
    </div>
  );
};

export default CardHero;
