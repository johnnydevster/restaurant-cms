import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <MenuContext.Provider
      value={{ setShowModal, setShowMenu, showMenu, showModal }}
    >
      {children}
    </MenuContext.Provider>
  );
};
