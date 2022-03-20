import React, { useState } from "react";
import cls from "classnames";

interface MembershipInfoProps {
  type: "1x" | "5x" | "10x";
}

export const MembershipInfo: React.FC<MembershipInfoProps> = (props) => {
  let [type, setType] = useState("1x");

  const is1x = type === "1x";
  const logo = is1x ? "/assets/mhh-logo.svg" : "/assets/mhh-logo-color.svg";

  return (
    <div className="flex relative">
      <div className="flex-1">
        <div
          className={cls(
            is1x ? "bg-black" : "bg-gray-100",
            "w-[404px] h-[255px] rounded-lg shadow-lg mx-auto mt-10 z-10"
          )}
        >
          <div className="flex flex-col">
            <div className="mx-5 pt-3">
              <img src={logo} className="w-[80px] h-[100px] " />
            </div>

            <div className="flex mx-5 mt-24 text-sm">
              <span
                className={cls(
                  "font-mono",
                  is1x ? "text-gray-300" : "text-black"
                )}
              >
                {is1x ? "1x Hacker" : "10x Hacker"}
              </span>

              <div className="ml-auto mt-[-30px]">
                <img
                  width="60px"
                  height="60px"
                  src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 flex flex-col items-center">
          <div className="flex flex-row">
            <div className="w-2 h-2 rounded-full bg-neutral-400 mr-1"></div>
            <div className="w-2 h-2 rounded-full bg-[#BE2593] mr-1"></div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="m-4 mt-10">
          <h3 className="font-medium text-3xl mb-2">
            {is1x ? "1x Hacker" : "10x Hacker"} Membership
          </h3>
          <span className="text-2xl text">0.5 ETH</span>
        </div>

        <ul className="mx-10 mt-6 text-md list-disc">
          <li className="mb-4 font-light">
            Governance rights to vote on house operations
          </li>
          <li className="mb-4 font-light">
            Priority access to in-house events
          </li>
          <li className="mb-4 font-light">
            Free access to workshops and how-to sessions
          </li>
          <li className="mb-4 font-light">Intros to other house members</li>
        </ul>
      </div>
    </div>
  );
};
