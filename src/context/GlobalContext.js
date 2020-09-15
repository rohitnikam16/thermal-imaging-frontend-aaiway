import React, { useState, createContext } from "react";
import photo from "../assets/vectors/picture-thumbnail.svg";

export const GlobalContext = createContext({
  thermalAfterApi: photo,
  visualAfterApi: photo,
});

export const GlobalContextProvider = ({ children }) => {
  const [thermalAfterApi, setThermalAfterApi] = useState(photo);
  const [visualAfterApi, setVisualAfterApi] = useState(photo);

  return (
    <GlobalContext.Provider
      value={{
        thermalAfterApi,
        visualAfterApi,
        setThermalAfterApi,
        setVisualAfterApi,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
