import React from 'react';

const Content = ({ title, subtitle }) => {
  return (
    <div>
      {title && (
        <h1 className="text-4xl font-semibold text-center pt-5 pb-5">
          {title}
        </h1>
      )}
      {subtitle && (
        <p className=" text-center text-lg font-normal pb-8">{subtitle}</p>
      )}
    </div>
  );
};

export default Content;
