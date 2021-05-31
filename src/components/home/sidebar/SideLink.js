import React from "react";

const SideLink = ({ name, Icon }) => {
  return (
    <li className="group cursor-pointer">
      <div className="block text-xl mb-2 pointer-events-none">
        <div className="inline-block">
          <div
            className={`flex items-center group-hover:bg-blue-100 group-hover:text-primary-base rounded-full pl-3 pr-8 py-3 ${
              name === "Home" && "text-primary-base"
            } `}
          >
            <Icon />
            <span className="ml-4 font-bold xl:hidden">{name}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SideLink;
