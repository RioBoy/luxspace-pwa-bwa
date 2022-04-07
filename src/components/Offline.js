import React, { useState, useEffect } from 'react';

export default function Offline() {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickyNavbar);
    return () => {
      window.removeEventListener('scroll', stickyNavbar);
    };
  }, []);

  function stickyNavbar() {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80
        ? setStickyClass(
            'fixed left-0 right-0 z-60 transition duration-200 shadow-lg',
          )
        : setStickyClass('');
    }
  }

  return (
    <div
      className={[
        'bg-yellow-50 border-l-4 border-yellow-400 p-4',
        stickyClass,
      ].join(' ')}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-yellow-400 fill-current"
            width="28"
            height="24"
            viewBox="0 0 28 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26.999 22.0781L14.8115 0.984375C14.6299 0.670898 14.3164 0.515625 14 0.515625C13.6836 0.515625 13.3672 0.670898 13.1885 0.984375L1.00099 22.0781C0.640635 22.7051 1.09181 23.4844 1.81251 23.4844H26.1875C26.9082 23.4844 27.3594 22.7051 26.999 22.0781ZM13.0625 9.1875C13.0625 9.05859 13.168 8.95312 13.2969 8.95312H14.7031C14.832 8.95312 14.9375 9.05859 14.9375 9.1875V14.5781C14.9375 14.707 14.832 14.8125 14.7031 14.8125H13.2969C13.168 14.8125 13.0625 14.707 13.0625 14.5781V9.1875ZM14 19.5C13.632 19.4925 13.2816 19.341 13.024 19.0781C12.7665 18.8152 12.6222 18.4618 12.6222 18.0938C12.6222 17.7257 12.7665 17.3723 13.024 17.1094C13.2816 16.8465 13.632 16.695 14 16.6875C14.368 16.695 14.7184 16.8465 14.976 17.1094C15.2336 17.3723 15.3778 17.7257 15.3778 18.0938C15.3778 18.4618 15.2336 18.8152 14.976 19.0781C14.7184 19.341 14.368 19.4925 14 19.5V19.5Z" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            You are offline. Don't you worry, you still can do things
          </p>
        </div>
      </div>
    </div>
  );
}
