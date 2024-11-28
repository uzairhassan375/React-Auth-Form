import React from "react";
import useToggle from "../../hooks/useToggle";
import Nav from "../../components/Nav/Nav";
const PageTwo = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <div className="flex justify-center items-center flex-grow">
        <button
          onClick={toggle}
          className={`px-6 py-2 font-semibold text-white rounded-md ${
            isToggled ? "bg-blue-500" : "bg-red-500"
          }`}
        >
          {isToggled ? "Blue" : "Red"}
        </button>
      </div>
    </div>
  );
};

export default PageTwo;