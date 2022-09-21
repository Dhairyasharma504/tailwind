import React from 'react';

const Image = ({ image }) => {
  return (
    <div>
      {image && (
        <img
          className="object-cover w-full dark:bg-gray-500 aspect-square h-64 w-64 rounded-lg opacity-100 hover:opacity-75 "
          src={image}
        />
      )}
    </div>
  );
};

export default Image;
