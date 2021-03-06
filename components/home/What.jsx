import React from "react";
import { SectionHeader } from "./SectionHeader";

export const WhatISMHH = () => {
  return (
    <div className="my-4 flex flex-col items-center lg:items-start">
      <SectionHeader number="1" title="What is Miami Hack House" />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2 text-center lg:text-left">
          <h2 className="mt-10 text-4xl font-bold tracking-wide mx-10 lg:mx-0">
            Co-Working + Web3 + <span className="text-[#BE2593]">Miami</span>
          </h2>

          <p className="mt-8 text-lg font-light tracking-wide text-neutral-500 leading-relaxed px-10 lg:px-0 lg:pr-10">
            We’re building the first on-chain co-working space for creators,
            engineers, designers. Miami have a permanent space to connect with
            other Miami locals or traveling entrepreneurs. As a members only
            community, we will take and review applications to join.
          </p>

          <div className="flex flex-col items-center lg:items-start">
            <div className="flex my-10 text-lg">
              <div className="text-[#BE2593] underline mr-10">
                Physical House
              </div>

              <div className="text-neutral-400">Virtual House</div>
            </div>
          </div>
        </div>

        <div className="col-span-1 p-4">
          <div className="w-[350px] h-[350px] rounded-full bg-gray-200 bg-[url('/assets/office-pic.jpg')] bg-cover bg-center mx-auto"></div>
        </div>
      </div>
    </div>
  );
};
