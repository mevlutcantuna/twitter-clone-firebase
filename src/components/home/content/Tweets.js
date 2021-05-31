import React from "react";
import { db } from "../../../firebase";
import {
  LikeIcon,
  ReplyIcon,
  ReTweetIcon,
  ShareIcon,
} from "../../../icons/icons";

function Tweets(props) {
  const [tweets, setTweets] = React.useState(null);

  React.useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  console.log(tweets);
  return (
    <div>
      {tweets !== null ? (
        tweets.map((item) => (
          <div
            className="flex border-solid border-gray-lightest border-b-2 py-4"
            key={Math.random()}
          >
            <div className="mr-4">
              <img
                className="w-12 h-12 mx-2 rounded-full"
                alt={"profile_image"}
                src={`${item.photoURL}`}
              />
            </div>
            <div className="w-full px-4">
              <div className="flex w-full justify-between">
                <div>
                  <span className="font-bold mr-4">{item.displayName}</span>
                  <span className="font-light">{item.email}</span>
                </div>
                <div className="font-light">
                  {item.timestamp?.toDate().toLocaleTimeString("tr-TR")}
                </div>
              </div>
              <div className="mb-4">{item.content}</div>
              <div className={`${item.imageOrGift === "" && "hidden"}`}>
                <img
                  alt={"imageGift"}
                  className="max-h-80 object-cover"
                  src={`${item.imageOrGift}`}
                />
              </div>
              <div className="mt-4 w-5/6">
                <ul className="flex w-full justify-between">
                  <li>
                    <div className="flex items-center text-gray-light hover:text-primary-base cursor-pointer">
                      <ReplyIcon className="w-5 h-5 mr-2" />
                      <span>{Math.floor(Math.random() * 10)}</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center text-gray-light hover:text-green-400 cursor-pointer">
                      <ReTweetIcon className="w-5 h-5 mr-2" />
                      <span>{Math.floor(Math.random() * 10)}</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center text-gray-light hover:text-red-400 cursor-pointer">
                      <LikeIcon className="w-5 h-5 mr-2" />
                      <span>{Math.floor(Math.random() * 10)}</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center text-gray-light hover:text-primary-base cursor-pointer">
                      <ShareIcon className="w-5 h-5 " />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center">
          <img alt={"loading_gift"} src="https://mete.pro/loadinggif.gif" />
        </div>
      )}
    </div>
  );
}

export default Tweets;
