import React from "react";
import { Timeline } from "react-twitter-widgets";
import { SearchIcon } from "../../../icons/icons";

function TimeLine(props) {
  return (
    <div>
      <div className=" flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <input
          className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm"
          placeholder={"Search Twitter"}
        />
      </div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "TwitterDev",
        }}
        options={{
          height: "640",
        }}
      />
    </div>
  );
}

export default TimeLine;
