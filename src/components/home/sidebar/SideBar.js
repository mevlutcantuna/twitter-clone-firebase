import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
} from "../../../icons/icons";
import SideLink from "./SideLink";
import { auth } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

function SideBar(props) {
  const [logoutToggle, setLogoutToggle] = React.useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  const history = useHistory();

  React.useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    dispatch({ type: "GET_USER", payload: { user: localUser } });
  }, [dispatch]);

  const logout = () => {
    auth
      .signOut()
      .then((res) => {
        localStorage.removeItem("user");
        history.push("/");
        dispatch({ type: "GET_USER", payload: { user: null } });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-extraLight transition-colors duration-400">
          <TwitterIcon
            className="text-primary-base"
            style={{ fontSize: "2rem" }}
          />
        </div>
        <ul>
          {sideLinks.map(({ name, icon }) => (
            <SideLink key={name} name={name} Icon={icon} />
          ))}
        </ul>
        <button className="xl:text-xs xl:flex xl:justify-center bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transition-colors duration-400">
          Tweet
        </button>
      </div>
      <div
        onClick={() => setLogoutToggle(!logoutToggle)}
        className="flex mb-4 items-center justify-center cursor-pointer relative"
      >
        <div>
          <img alt="profile_pic" className="w-8 h-8" src={`${user.photoURL}`} />
        </div>
        <div className="w-9/12 flex justify-between items-center xl:hidden ml-4 ">
          <div className="flex flex-col">
            <span className="font-bold">{user.displayName}</span>
            <span className="font-light">{user.email}</span>
          </div>
          <div>
            <MoreHorizIcon />
          </div>
        </div>
        <div
          onClick={logout}
          className={`flex z-30 items-center justify-between px-4 absolute w-40  h-12 rounded-full shadow-xl bg-gray-200 -top-12 xl:-top-2 xl:left-20 ${
            !logoutToggle ? "hidden" : ""
          }`}
        >
          <span>Log - Out </span>
          <span>
            <ExitToAppIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
