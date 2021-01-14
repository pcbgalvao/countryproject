import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  console.log("Inseide Route Component");
  
  useEffect(() => {
    console.log("Inside useEffect onLocationChange");
    const onLocationChange = () => {
      console.log("Inside Route.onLocationChange");
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      console.log("Route.removeEventListener");
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
