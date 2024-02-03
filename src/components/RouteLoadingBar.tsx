import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export const RouteLoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setProgress(50); // Start loading

    const timer = setTimeout(() => {
      setProgress(100); // Complete loading
    }, 50); // Adjust time as needed

    return () => clearTimeout(timer);
  }, [location]);

  return <LoadingBar color="#d87d4a" progress={progress} />;
};


