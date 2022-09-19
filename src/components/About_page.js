import React from 'react';

const About_page = () => {
  return (
    <div class=" flex justify-center mt-5 ">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-3 sm:grid-cols-2 ">
        <img
          class=" object-cover w-full dark:bg-gray-500 aspect-square h-88 w-64 rounded-lg"
          src="./images/aboutProfile1.webp"
        />

        <img
          class="object-cover w-full dark:bg-gray-500 aspect-square h-88 w-64 rounded-lg "
          src="./images/aboutProfile2.webp"
        />
        <img
          class="object-cover w-full dark:bg-gray-500 aspect-square h-88 w-64 rounded-lg"
          src="./images/aboutProfile3.webp"
        />
      </div>
    </div>
  );
};

export default About_page;
