import React from "react";
import { TbHeartUp } from "react-icons/tb";
import { BiLockAlt } from "react-icons/bi";
import { GiThumbUp } from "react-icons/gi";

const Acknowledge = () => {
  return (
    <div>
      <span className="text-sm text-black-400 font-bold underline py-4 flex justify-start items-center">
        <span className="pr-4">
          <TbHeartUp />
        </span>
        <a href="e">
          60 days Get additional 30-day return with IKEA Family, Join for free
        </a>
      </span>
      <span className="text-sm text-black-400 font-bold underline py-4 flex justify-start items-center">
        <span className="pr-4">
          <BiLockAlt />
        </span>
        <a href="e">Secure shopping with SSL data encryption</a>
      </span>
      <hr></hr>
      <span className="text-sm text-black-400 font-bold underline py-4 flex justify-start items-center">
        {" "}
        <span className="pr-4">
          <GiThumbUp />
        </span>
        <a href="e"> We would love to get your feedback</a>
      </span>
    </div>
  );
};

export default Acknowledge;
