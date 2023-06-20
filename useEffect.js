import React, { useEffect, useState } from "react";

function Welcome() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return <>{windowWidth}</>;
}

export default Welcome;
