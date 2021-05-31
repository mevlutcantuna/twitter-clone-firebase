import React from "react";
import { PopulerIcon } from "../../../icons/icons";
import TweetBox from "./TweetBox";
import Tweets from "./Tweets";

function Content(props) {
  return (
    <div>
      <header className="flex justify-between items-center px-3 py-3">
        <span className="font-bold text-2xl">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <hr className="mb-3" />
      <TweetBox />
      <hr className="mt-3" />
      <div className="h-2 bg-gray-lightest" />
      <hr className="mb-3" />
      <div>
        <Tweets />
      </div>
    </div>
  );
}

export default Content;
