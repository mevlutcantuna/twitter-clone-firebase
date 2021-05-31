import React from "react";
import SideBar from "./sidebar/SideBar";
import TimeLine from "./timeLine/TimeLine";
import Content from "./content/Content";

function Home() {
  return (
    <div className="flex h-screen mx-40 xl:mx-30 xlg:mx-10 sm:mx-0">
      <div className="w-72 px-2 xl:w-20 border-solid border-r-2 border-gray-lightest">
        <SideBar />
      </div>
      <div className="flex-1">
        <Content />
      </div>
      <div className="w-80 lg:hidden border-solid border-l-2 border-gray-lightest">
        <TimeLine />
      </div>
    </div>
  );
}

export default Home;
