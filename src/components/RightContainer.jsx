import React from "react";
import { userData } from "./data.js";
import Blocks from "./Blocks.jsx";

const RightContainer = () => {
  return (
    <div className="flex overflow-hidden touch-pan-y p-5 bg-amber-300 h-175 ">
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
