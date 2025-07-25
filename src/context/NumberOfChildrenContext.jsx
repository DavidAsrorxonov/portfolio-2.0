import { createContext, useContext, useState } from "react";

const numberOfChildrenContext = createContext();

export const NumberOfChildrenProvider = ({ children }) => {
  const [numberOfChildren, setNumberOfChildren] = useState(0);

  return (
    <numberOfChildrenContext.Provider
      value={{
        numberOfChildren,
        setNumberOfChildren,
      }}
    >
      {children}
    </numberOfChildrenContext.Provider>
  );
};

export const useNumberOfChildren = () => useContext(numberOfChildrenContext);
