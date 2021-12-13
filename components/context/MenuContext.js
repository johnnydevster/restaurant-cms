import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showReservationModal, setShowReservationModal] = useState(false);
  return (
    <MenuContext.Provider
      value={{
        setShowModal,
        setShowMenu,
        showMenu,
        showModal,
        showReservationModal,
        setShowReservationModal,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
