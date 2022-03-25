import React from "react";

export const SectionHeader = ({ number, title }) => {
  return (
    <h3 className="text-gray-300 flex items-center font-light text-lg">
      <span className="mr-4">{`0${number}/`}</span>
      <span className="bg-gray-300 h-[1px] w-[130px]"></span>
      <span className="ml-2">{title}</span>
    </h3>
  );
};
