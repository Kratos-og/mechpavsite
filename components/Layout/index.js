import React from "react";
import Button from "../Layout/Button";
import Mouse from "../Layout/Mouse";

export default function index() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <div className="text-[15rem] font-medium leading-none">
          <p>MECHPAVS</p>
        </div>
        <div className="tracking-[0.3rem] text-sm">
          <div>
            WE ARE <span className="font-bold">FRONTRIBE</span>
          </div>
          <div>CAREER MANAGEMENT SERVICE FOR FRONTEND DEVELOPERS</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <Button text={"join as developer"} />
          </div>
          <div className="w-16 translate-y-11">
            <Mouse />
          </div>
        </div>
      </div>
    </div>
  );
}
