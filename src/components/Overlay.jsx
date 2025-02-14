import React from "react";
import Portal from "./Portal";
import Sidebar from "./Sidebar";

export const Overlay = () => {
  return (
    <>
      <Portal>
        <Sidebar />
      </Portal>
    </>
  );
};
