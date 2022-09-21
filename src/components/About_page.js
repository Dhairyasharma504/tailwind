import React from 'react';
import Image from './elements/Image';

const About_page = () => {
  return (
    <div className=" flex justify-center mt-5 ">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-3 sm:grid-cols-2 ">
        <Image image="./images/aboutProfile1.webp" />
        <Image image="./images/aboutProfile2.webp" />
        <Image image="./images/aboutProfile3.webp" />
      </div>
    </div>
  );
};

export default About_page;
