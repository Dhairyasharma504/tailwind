import React from 'react';

const Input = ({ error, ...props }) => {
  return (
    <label className="block">
      <input
        className="border-2  border-black  block p-4 w-full  rounded-lg  sm:text-md border-focus-none "
        {...props}
      />
      <span className="pt-5">{error}</span>
    </label>
  );
};

export default Input;
