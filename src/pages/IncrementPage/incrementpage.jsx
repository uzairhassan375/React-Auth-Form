import React from 'react';
import useIncrement from '../../hooks/useIncrement';
import Nav from '../../components/Nav/Nav';
const IncrementPage = () => {
  const { count, increment } = useIncrement();

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl font-bold mb-4">Increment Counter</h1>
        <span className="text-xl">{count}</span>
        <button onClick={increment} className="bg-gray-300 p-2 mt-4">
          Increment
        </button>
      </div>
    </div>
  );
};

export default IncrementPage;