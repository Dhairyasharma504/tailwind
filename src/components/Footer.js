import React from 'react';
import Image from 'next/image';
const Footer = () => {
  return (
    <div>
      <hr className="w-1/2 border-1 mx-auto" />
      <div class="flex items-center justify-center mt-10 mb-10 ">
        <p class="font-medium">© Copyright 1986. All Rights Reserved.</p>
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
