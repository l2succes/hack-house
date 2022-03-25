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
    <div className="bg-zinc-200	shadow-md max-w-md mx-auto p-0 lg:p-4 mt-[220px] rounded">
      <div
        className={cls(
          is1x ? "bg-black" : "bg-gray-100",
          "max-w-[404px] max-h-[255px] w-full pb-[63%] rounded-lg shadow-lg mx-auto mt-[-200px] z-10 relative"
        )}
      >
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-5 left-5">
            <img src={logo} className="max-w-[70px]" />
          </div>

          <span
            className={cls(
              "font-mono absolute bottom-5 left-5 text-sm",
              is1x ? "text-gray-300" : "text-black"
            )}
          >
            {is1x ? "1x Hacker" : "10x Hacker"}
          </span>

          <img
            width="60px"
            height="60px"
            className="max-w-[60px] max-h-[60px] w-[10vw] absolute right-5 bottom-5"
            src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
          />
        </div>
      </div>

      <h3 className="font-mono font-medium text-xl m-4 mt-10">
        {is1x ? "1x Hacker" : "10x Hacker"} Membership
      </h3>
      <span className="mx-4">0.5 ETH</span>

      <ul className="mx-4 mt-6 text-sm">
        <li className="mb-4">Governance rights to vote on house operations</li>
        <li className="mb-4">Priority access to in-house events</li>
        <li className="mb-4">Free access to workshops and how-to sessions</li>
        <li className="mb-4">Intros to other house members</li>
      </ul>

      <div className="mt-8 mx-4 mb-8">
        <button className="bg-black text-white text-sm py-3 px-4 rounded">
          Buy Membership
        </button>
      </div>
    </div>
  );
};
