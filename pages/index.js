import { useEffect } from "react";
import Head from "next/head";
import { Header } from "../components/home/Header";
import { SectionHeader } from "../components/home/SectionHeader";
import { MembershipCard } from "../components/home/MembershipCard";
import { WhatISMHH } from "../components/home/What";
import sal from "sal.js";

export default function Home() {
  useEffect(() => {
    sal({
      threshold: 0.1,
    });
  });

  return (
    <div>
      <Head>
        <title>Hack House: Miami</title>
      </Head>
      <main>
        <Header />

        <div className="bg-[#F6F8FA]">
          <div className="container max-w-screen-xl mx-auto py-10">
            <div
              className="mx-auto mb-8"
              data-sal="slide-up"
              data-sal-delay="300"
            >
              <WhatISMHH />
            </div>

            <div
              className="mx-auto mt-20 text-center"
              data-sal="slide-up"
              data-sal-delay="300"
            >
              <div className="flex items-center flex-col">
                <SectionHeader number="2" title="Where?" />
              </div>
              <h2 className="mt-10 text-4xl font-bold tracking-wide mx-10 lg:mx-0">
                Wynwood is the place
              </h2>
              <p className="mt-8 text-lg font-light tracking-wide text-neutral-500 leading-relaxed max-w-4xl mx-auto px-10 lg:px-0">
                We chose Wynwood because it’s the perfect place to host a hacker
                house with the street art, and up & coming feel of the
                neighborhood.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 mx-10 my-10">
                <div className="col-span-1 p-4 flex flex-col items-center">
                  <div className="bg-[url('/assets/wynwood-1.jpeg')] bg-cover bg-center w-full pb-[100%]"></div>
                  <div className="my-5">410-422 NW 25TH ST</div>
                </div>
                <div className="col-span-1 p-4 flex flex-col items-center">
                  <div className="bg-[url('/assets/wynwood-2.jpeg')] bg-cover bg-center w-full pb-[100%]"></div>
                  <div className="my-5">2734 NW 1ST AVE</div>
                </div>
                <div className="col-span-1 p-4 flex flex-col items-center">
                  <div className="bg-[url('/assets/wynwood-3.jpeg')] bg-cover bg-center w-full pb-[100%]"></div>
                  <div className="my-5">2534 N MIAMI AVE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container max-w-screen-xl mx-auto my-16"
          data-sal="slide-up"
          data-sal-delay="300"
        >
          <div className="mx-auto mb-20 flex flex-col lg:flex-row-reverse">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <SectionHeader number="3" title="Membership" />
              </div>
              <h3 className="text-4xl my-4 font-bold mx-10 lg:mx-0">
                Be part of the gang
              </h3>
              <p className="mt-8 text-lg font-light tracking-wide text-neutral-500 leading-relaxed px-10 lg:px-0">
                The membership cards would be minted as NFTs and would be
                utilized as proof of a member being able to enter the space and
                access to the space.
              </p>
            </div>
            <div className="flex-1 mx-5 lg:mx-10 mt-5">
              <MembershipCard type="1x" />
            </div>
          </div>
        </div>

        <div className="bg-[url('/assets/membership-section-bg.png')] bg-cover">
          <div
            className="container max-w-screen-xl mx-auto py-16"
            data-sal="slide-up"
            data-sal-delay="300"
          >
            <div className="flex flex-col lg:flex-row text-center lg:text-left">
              <div className="flex-1">
                <div className="flex flex-col items-center lg:items-start">
                  <SectionHeader number="4" title="Join our Waiting List" />
                </div>

                <h2 className="mt-10 text-4xl lg:text-5xl font-bold tracking-wide mx-10 lg:mx-0">
                  Get the first 200 memberships
                </h2>

                <p className="mt-8 text-lg font-light tracking-wide text-neutral-500 leading-relaxed mx-10 lg:mx-0">
                  The space is meant to serve the hacker community in Miami:
                  entrepreneurs, designers, software engineers. This will be a
                  space to work and collaborate with others. As well as host
                  hackathons, events.
                </p>
              </div>
              <div className="flex-1 p-20 mx-auto">
                <img src="/assets/membership-images.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div
            className="container max-w-screen-xl mx-auto py-16"
            data-sal="slide-up"
            data-sal-delay="300"
          >
            <div
              className="flex flex-col items-center
            "
            >
              <SectionHeader number="5" title="Roadmap" />
            </div>

            <h2 className="mt-10 text-5xl lg:text-7xl font-bold tracking-wide text-transparent text-center bg-clip-text bg-gradient-to-r from-[#BE2593] to-[#03CEBF]">
              Roadmap
            </h2>

            <div className="my-20">
              <div>
                <div className="w-full h-[8px] lg:h-[15px] relative flex items-center">
                  <div
                    className="inset-0 absolute bg-gradient-to-r from-[#BE2593] to-[#03CEBF]"
                    style={{
                      "-webkit-mask-image": `linear-gradient(to right, transparent, rgba(255, 255, 255) 50%, transparent 100%)`,
                    }}
                  ></div>
                  <div className="flex w-full">
                    <div className="flex flex-1 flex-col items-center">
                      <div className="w-7 h-7 lg:w-10 lg:h-10 bg-white rounded-full"></div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center">
                      <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center">
                      <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center">
                      <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 text-neutral-600 mt-10 antialiased text-center">
                  <div className="col-span-1 mt-20 lg:mt-0 text-neutral-400">
                    <div className="font-bold mb-10 text-lg">Q1 2022</div>
                    <ul className="text-left ml-10 lg:ml-20">
                      <li>Launch NFT Collection</li>
                      <li>Start Discord</li>
                    </ul>
                  </div>
                  <div className="col-span-1 mt-20 lg:mt-0">
                    <div className="font-bold mb-10">Q2 2022</div>
                    <ul className="text-left ml-10 lg:ml-20">
                      <li>Launch DAO</li>
                      <li>Deploy $HK token on Polygon testnet</li>
                    </ul>
                  </div>
                  <div className="col-span-1 mt-20 lg:mt-0">
                    <div className="font-bold mb-10">Q3 2022</div>
                    <ul className="text-left ml-10 lg:ml-20">
                      <li>Begin Construction</li>
                    </ul>
                  </div>
                  <div className="col-span-1 mt-20 lg:mt-0">
                    <div className="font-bold mb-10">Q4 2022</div>
                    <ul className="text-left ml-10 lg:ml-20"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container max-w-screen-xl my-20 mx-auto">
          <div className="grid grid-cols-3 lg:grid-cols-6 text-center lg:text-left">
            <div className="col-span-3 mb-10">
              <img
                src="/assets/mhh-logo-color.svg"
                className="w-[100px] h-[100px] mx-auto lg:mx-0"
              />

              <p className="font-sans font-light text-neutral-400 text-sm max-w-sm text-center mx-auto lg:text-left lg:mx-0">
                The first on-chain co-working space <br />
                for builders and hustlers out in Miami
              </p>
            </div>
            <div className="col-span-1 antialiased">
              <ul className="font-light">
                <li className="mb-4 text-lg font-bold text-neutral-700 antialiased">
                  Company
                </li>
                <li className="mb-2 text-neutral-400">Careers</li>
                <li className="mb-2 text-neutral-400">About Us</li>
                <li className="mb-2 text-neutral-400">Privacy Policy</li>
              </ul>
            </div>
            <div className="col-span-1">
              <ul className="font-light">
                <li className="mb-4 text-lg font-bold text-neutral-700 antialiased">
                  Discover
                </li>
                <li className="mb-2 text-neutral-400">FAQ</li>
                <li className="mb-2 text-neutral-400">Becoming a Member</li>
              </ul>
            </div>
            <div className="col-span-1">
              <ul className="font-light">
                <li className="mb-4 text-lg font-bold text-neutral-700 antialiased">
                  Information
                </li>
                <li className="mb-2 text-neutral-400">Blog</li>
                <li className="mb-2 text-neutral-400">Support</li>
                <li className="mb-2 text-neutral-400">Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t-neutral-200 border-solid border-t-[1px] w-full mt-10 pt-5 text-center lg:text-left">
            <span className="font-light text-neutral-600">
              Miami Hack House LLC, All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// const RoadmapGradient = styled.div``;
