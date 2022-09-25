import React from 'react';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className="mb-7">
      <hr className="w-1/2 border-1 mx-auto" />
      <div class=" text-center my-6 ">
        <p class="font-medium">© Copyright 1986. All Rights Reserved.</p>
        <p className="text-inherit">Made by Web3Templates</p>
      </div>
      <Image
        width={150}
        height={25}
        layout="fixed"
        src="/images/footer logo.svg"
        alt="title"
        className=""
      />
    </div>
  );
};

export default Footer;
