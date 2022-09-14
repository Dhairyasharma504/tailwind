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

      <button
        type="button"
        className="flex items-left justify-left w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
      >
        {item.button}
      </button>

      <h2 className="text-2xl font-semibold flex items-left justify-left">
        {item.text}
      </h2>
    </div>
  );
};

export default CardHero;
