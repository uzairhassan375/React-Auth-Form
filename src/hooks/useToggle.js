import { useState } from "react";

const useToggle = (initialState = false) => {
  const [value, setValue] = useState(initialState);

  const toggle = () => setValue((prev) => !prev);

  return [value, toggle];
};

export default useToggle;
