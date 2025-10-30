import React from "react";
import { CiPlay1 } from "react-icons/ci";

export default function RotatingTextBadge() {
  const text = "AI AND AUTOMATION • ROBOT • INTEGRATION • ";

  return (
    <div className="flex items-center justify-center -left-20 relative mb-10">
      <div className="relative w-52 h-52">
        {/* Rotating text circle */}
        <div className="absolute inset-0 animate-spin-slow bg-[#999999] rounded-full">
          <svg viewBox="0 0 200 200" className="w-full h-full ">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text
              className="text-[14px] font-bold fill-white uppercase tracking-wider"
              dy="5"
            >
              <textPath href="#circlePath" startOffset="0%">
                {text.repeat(2)}
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center white circle with CiPlay1 icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
            <CiPlay1 className="text-6xl  text-purple-600 transition-transform cursor-pointer hover:scale-105" />
          </div>
        </div>
      </div>

      {/* Rotation animation */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
