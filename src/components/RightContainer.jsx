import React from "react";
import { userData } from "./data.js";
import Blocks from "./Blocks.jsx";

const RightContainer = () => {
  return (
    <div className="flex flex-nowrap overflow-y-hidden overflow-x-auto touch-pan-x h-full flex-1 shrink-0 hide-scrollbar  ">
      {userData.map((user) => {
        return (
          <Blocks
            number={user.id}
            imageUrl={user.image}
            text={user.about}
            name={user.name}
          />
        );
      })}
    </div>
  );
};

export default RightContainer;
