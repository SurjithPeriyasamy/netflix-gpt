import React from "react";

const LoadingUi = () => {
  return (
    <div className="h-screen bg-black bg-opacity-90 flex justify-center items-center">
      <div className="text-white flex justify-center items-center">
        <div className="h-40 w-40 border-8 rounded-full border-y-black animate-spin "></div>
        <div className="absolute font-bold">Wait Buddy!!!</div>
      </div>
    </div>
  );
};

export default LoadingUi;
