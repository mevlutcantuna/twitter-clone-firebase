import React from "react";
import { useSelector } from "react-redux";
import {
  EmojiIcon,
  GIFIcon,
  PollIcon,
  ImageIcon,
  ScheduleIcon,
} from "../../../icons/icons";

import { db } from "../../../firebase";
import firebase from "firebase";

function TweetBox(props) {
  const [content, setContent] = React.useState("");
  const [imageGiftToggle, setImageGiftToggle] = React.useState(false);
  const [imageGift, setImageGift] = React.useState("");

  const user = useSelector((state) => state.authReducer.user);

  const sendTweet = () => {
    if (content !== "") {
      db.collection("feed").add({
        displayName: user.displayName,
        email: user.email,
        content: content,
        photoURL: user.photoURL,
        imageOrGift: imageGift,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setImageGift("");
    setContent("");
  };

  return (
    <div className="px-4 flex flex-col">
      <div className="flex mb-8">
        <img
          className="w-12 h-12 rounded-full mr-4"
          alt="profile_pic"
          src={`${user.photoURL}`}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-8 resize-none text-xl outline-none"
          placeholder={"What's happening?"}
        />
      </div>
      <div className={`${!imageGiftToggle && "hidden"}`}>
        <input
          value={imageGift}
          onChange={(e) => setImageGift(e.target.value)}
          className="w-full outline-none pl-4 mb-4"
          placeholder={"Image-Url or Gift-Url (optional)"}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-between px-6 items-center">
          <div className="flex justify-around w-8/12">
            <div onClick={() => setImageGiftToggle(!imageGiftToggle)}>
              <ImageIcon className="w-6 h-6 text-primary-base cursor-pointer" />
            </div>
            <div onClick={() => setImageGiftToggle(!imageGiftToggle)}>
              <GIFIcon className="w-6 h-6 text-primary-base cursor-pointer" />
            </div>
            <div>
              <PollIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div>
              <EmojiIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div>
              <ScheduleIcon className="w-6 h-6 text-primary-base" />
            </div>
          </div>
          <div>
            <button
              onClick={sendTweet}
              className="bg-primary-base w-24 h-10 rounded-full text-white"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetBox;
