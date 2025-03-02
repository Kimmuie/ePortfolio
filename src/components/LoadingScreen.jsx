import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const columns = [
    { id: 1, duration: "duration-2050" },
    { id: 2, duration: "duration-2250" },
    { id: 3, duration: "duration-2150" },
    { id: 4, duration: "duration-2000" },
    { id: 5, duration: "duration-2100" },
    { id: 6, duration: "duration-2050" },
    { id: 7, duration: "duration-2150" },
    { id: 8, duration: "duration-2100" }
  ];

  return (
    <div className="fixed inset-0 z-40 overflow-hidden">
      {/* GIF overlay on screen */}
      <div 
        className={`absolute inset-0 flex items-center justify-center z-50 transition-transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } duration-2000 ease-in-out`}>
        <img src="./img/sign.gif" width="300" height="300" className="object-contain" alt="Loading..." />
      </div>
      {/* Stagger Animation */}
      <div className="flex h-full w-full">
        {columns.map((column) => (
          <div
            key={column.id}
            className={`flex-1 bg-seconBlue1 transition-transform ${
              isVisible ? "translate-y-0" : "-translate-y-full"
            } ${column.duration} ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;