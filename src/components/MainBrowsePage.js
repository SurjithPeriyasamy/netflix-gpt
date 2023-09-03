import React from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const MainBrowsePage = () => {
  return (
    <div>
      <div className="relative z-0">
        <MainContainer />
      </div>
      <div>
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default MainBrowsePage;
