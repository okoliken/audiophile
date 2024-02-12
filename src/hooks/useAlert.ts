import { useState } from 'react';

export const useAlert = () => {
  const [alert, setAlert] = useState<boolean>(false);

  // Function to show the alert
  const showAlert = () => {
    setAlert(true);
    // Automatically hide the alert after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  // Function to manually hide the alert, if needed
  const hideAlert = () => {
    setAlert(false);
  };

  return {
    alert,
    showAlert,
    hideAlert,
  };
};
