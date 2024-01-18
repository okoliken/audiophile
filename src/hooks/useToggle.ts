import { useState } from "react";

export const useToggler = () => {
  const [isToggled, setToggle] = useState(false);

  const toggleMobileDrawer = () => {
    setToggle(!isToggled);
  };

  return {
    isToggled,
    toggleMobileDrawer,
  };
};
