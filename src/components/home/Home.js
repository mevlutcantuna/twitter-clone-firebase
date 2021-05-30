import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.authReducer.user);
  console.log(user.displayName);
  return <div>home</div>;
}

export default Home;
