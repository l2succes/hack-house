import React from "react";
import cls from "classnames";

interface MembershipCardProps {
  type: "1x" | "5x" | "10x";
}

export const MembershipCard: React.FC<MembershipCardProps> = (props) => {
  const { type } = props;

  const is1x = type === "1x";

  const logo = is1x ? "/assets/mhh-logo.svg" : "/assets/mhh-logo-color.svg";

  return (
    <div className="bg-zinc-200	shadow-md max-w-full p-5 mt-[220px] rounded">
      <div
        className={cls(
          is1x ? "bg-black" : "bg-gray-100",
          "w-[404px] h-[255px] rounded-lg shadow-lg mx-auto mt-[-200px] z-10"
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

      <h3 className="font-mono font-medium text-xl m-4 mt-10">
        Noob Membership
      </h3>
      <span className="mx-4">0.5 ETH</span>

      <ul className="mx-4 mt-6 text-sm">
        <li className="mb-4">Governance rights to vote on house operations</li>
        <li className="mb-4">Priority access to in-house events</li>
        <li className="mb-4">Free access to workshops and how-to sessions</li>
        <li className="mb-4">Intros to other house members</li>
      </ul>
    </div>
  );
};
