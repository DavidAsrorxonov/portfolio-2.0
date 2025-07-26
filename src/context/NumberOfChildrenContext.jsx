import { createContext, useContext, useState } from "react";

const numberOfChildrenContext = createContext();

export const NumberOfChildrenProvider = ({ children }) => {
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <numberOfChildrenContext.Provider
      value={{
        numberOfChildren,
        setNumberOfChildren,
        activeIndex,
        setActiveIndex,
      }}
    >
      {children}
    </numberOfChildrenContext.Provider>
  );
};

export const useNumberOfChildren = () => useContext(numberOfChildrenContext);
