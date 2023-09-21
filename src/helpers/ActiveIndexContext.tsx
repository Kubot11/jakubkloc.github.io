import React from "react";

export const ActiveIndexContext = React.createContext({
  activeIndex: 0,
  setActiveIndex: (_index: number) => {},
});
