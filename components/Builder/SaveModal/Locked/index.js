import React from "react";
import { TiLockClosed } from "react-icons/ti";

export default function Locked(props) {
  return (
    <div className="flex gap-2">
      {props.lock && (
        <span className="text-white text-xl relative group">
          <TiLockClosed />
          <span class="absolute -top-5 scale-0 transition-all rounded bg-gray-800 p-[0.3rem] text-xs text-white group-hover:scale-100 whitespace-nowrap ">
            You Dont have this part
          </span>
        </span>
      )}
      <span className="text-pavia-green">
        {props.type} |{" "}
        {props.skin}
      </span>
    </div>
  );
}
