import React from 'react';
import Link from 'next/link';
const navItems = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
  {
    image:
      'https://cdn.sanity.io/images/cijrdavx/production/e8fa4f57a95067e838d7aa5a4f80042137d9f5b6-132x52.svg?w=640&q=75&fit=clip&auto=format',
    label: 'logo',
  },
  {
    label: 'Achive',
    link: '/achive',
  },
  {
    label: 'Github',
  },
  {
    label: 'download',
  },
];

const Navbar = () => {
  return (
    <div>
      <header className=" dark:bg-gray-800 dark:text-gray-100">
        <div className=" flex justify-between h-16 mx-auto md:justify-center items-center md:space-x-8 my-2">
          {navItems.map((item) => {
            if (item.image) {
              return (
                <div key={item.label} className="px-3">
                  <img src={item.image} alt={item.label}></img>
                </div>
              );
            } else {
              return (
                <Link href={item.link || '/'} key={item.label}>
                  <a className=" text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                    {item.label}
                  </a>
                </Link>
              );
            }
          })}

          <button title="Button" type="button" className="p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
