import React, { useState } from "react";
import context from "./Context";

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [fontTypeSarif, setFontTypeSarif] = useState(true);

  const switchThame = () => {
    setTheme((prevState) => !prevState);
  };

  const changeFont = () => {
    setFontTypeSarif((prevState) => !prevState);
  };

  const contextValue = {
    darkTheme: theme,
    switchThame,
    sarif: fontTypeSarif,
    changeFont,
  };

  console.log(theme);
  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export default ContextProvider;
