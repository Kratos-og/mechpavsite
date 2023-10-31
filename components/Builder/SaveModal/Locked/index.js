import React from "react";
import { TiLockClosed } from "react-icons/ti";

export default function Locked(props) {
  return (
    <div className="flex gap-2">
      {props.lock && (
        <span className="text-white text-xl relative group">
          <TiLockClosed />
          <span className="absolute top-7 z-50 scale-0 transition-all rounded bg-white p-[0.3rem] text-xs text-black group-hover:scale-100 whitespace-nowrap ">
            You do not own this mech part
          </span>
        </span>
      )}
      <span className="text-pavia-green">
        {props.type} | {props.skin}
      </span>
    </div>
  );
}
