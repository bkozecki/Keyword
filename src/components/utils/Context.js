import React from "react";

const context = React.createContext({
  darkTheme: false,
  switchThame: (state) => {},
  sarif: true,
  changeFont: (state) => {},
});

export default context;
