import React from 'react';

const CircularLoader = () => {
  return (
    <div className="w-full h-8 animate-spin">
      <div className="border-t-4 border-white border-opacity-50 h-full w-full rounded-full"></div>
    </div>
  );
};

export default CircularLoader;
