import Head from "next/head";
import { Header } from "../components/home/Header";
import { MembershipInfo } from "../components/home/MembershipInfo";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hack House: Miami</title>
      </Head>
      <main>
        <Header />

        <div className="bg-[#F6F8FA]">
          <div className="container max-w-screen-xl mx-auto py-16">
            <div className="mx-auto mb-8">
              <div className="my-4">
                <h3 className="text-gray-300 flex items-center font-light text-lg">
                  <span className="mr-4">00/</span>
                  <span className="bg-gray-300 h-[1px] w-[130px]"></span>
                  <span className="ml-2">What is Miami Hack House</span>
                </h3>
                <div className="grid grid-cols-3">
                  <div className="col-span-2">
                    <h2 className="mt-10 text-4xl font-bold tracking-wide">
                      Co-Working + Web3 +{" "}
                      <span className="text-[#BE2593]">Miami</span>
                    </h2>

                    <p className="mt-8 text-lg font-light tracking-wide text-neutral-500 leading-relaxed pr-10">
                      We’re building the first on-chain co-working space for
                      creators, engineers, designers. Miami have a permanent
                      space to connect with other Miami locals or traveling
                      entrepreneurs. As a members only community, we will take
                      and review applications to join.
                    </p>

                    <div className="flex my-10 text-lg">
                      <div className="text-[#BE2593] underline mr-10">
                        Physical House
                      </div>

                      <div className="text-neutral-400">Virtual House</div>
                    </div>
                  </div>
                  <div className="col-span-1 p-4">
                    <div className="w-[350px] h-[350px] relative">
                      {/* <House /> */}
                    </div>
                    <div className="w-[350px] h-[350px] rounded-full bg-gray-200 hidden"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mb-8 text-center">
              <div className="flex items-center flex-col">
                <h3 className="text-gray-300 flex items-center font-light text-lg ">
                  <span className="mr-4">01/</span>
                  <span className="bg-gray-300 h-[1px] w-[130px]"></span>
                  <span className="ml-2">Where?</span>
                </h3>
              </div>
              <h2 className="mt-10 text-4xl font-bold tracking-wide">
                Wynwood is the place
              </h2>
              <p className="mt-8 text-lg font-light tracking-wide text-neutral-500 leading-relaxed max-w-4xl mx-auto">
                We chose Wynwood because it’s the perfect place to host a hacker
                house with the street art, and up & coming feel of the
                neighborhood.
              </p>

              <div className="grid grid-cols-3 mx-10 my-20">
                <div className="col-span-1 p-4 flex flex-col items-center">
                  <div className="bg-[url('/assets/wynwood-1.jpeg')] bg-cover bg-center w-[360px] h-[390px]"></div>
                  <div className="my-5">410-422 NW 25TH ST</div>
                </div>
                <div className="col-span-1 p-4 flex flex-col items-center">
                  <div className="bg-[url('/assets/wynwood-2.jpeg')] bg-cover bg-center w-[360px] h-[390px]"></div>
                  <div className="my-5">2734 NW 1ST AVE</div>
                </div>
                <div className="col-span-1 p-4 flex flex-col items-center">
                  <div className="bg-[url('/assets/wynwood-3.jpeg')] bg-cover bg-center w-[360px] h-[390px]"></div>
                  <div className="my-5">2534 N MIAMI AVE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-screen-xl mx-auto my-16">
          <div className="mx-auto mb-20 flex">
            <div className="flex-1">
              <h3 className="text-8xl my-4 font-bold md:text-7xl">
                <div className="bg-gradient-to-r from-[#BE2593] to-transparent pl-2">
                  Be part
                </div>
                <div className="pl-2">of the gang</div>
              </h3>
            </div>
            <div className="flex-1 ml-10 mt-5">
              <div className="flex flex-col">
                <h3 className="text-gray-300 flex items-center font-light text-lg ">
                  <span className="mr-4">02/</span>
                  <span className="bg-gray-300 h-[1px] w-[130px]"></span>
                  <span className="ml-2">Membership</span>
                </h3>
              </div>
              <p className="mt-8 text-lg font-light tracking-wide text-neutral-500 leading-relaxed">
                The membership cards would be minted as NFTs and would be
                utilized as proof of a member being able to enter the space and
                access to the space.
              </p>
            </div>
          </div>

          <MembershipInfo />
          {/* <div className="grid grid-cols-4 gap-4 relative">
            
            <div className="col-span-2">
              <MembershipCard type="1x" />
            </div>
            <div className="col-span-2">
              <MembershipCard type="10x" />
            </div>
          </div> */}
        </div>

        <div className="bg-[url('/assets/membership-section-bg.png')] bg-cover">
          <div className="container max-w-screen-xl mx-auto py-16">
            <div className="flex">
              <div className="flex-1">
                <div className="flex flex-col">
                  <h3 className="text-gray-300 flex items-center font-light text-lg ">
                    <span className="mr-4">03/</span>
                    <span className="bg-gray-300 h-[1px] w-[130px]"></span>
                    <span className="ml-2">Join our Waiting List</span>
                  </h3>
                </div>

                <h2 className="mt-10 text-6xl font-bold tracking-wide">
                  Get the first 200 memberships
                </h2>

                <p className="mt-8 text-lg font-light tracking-wide text-neutral-500 leading-relaxed">
                  The space is meant to serve the hacker community in Miami:
                  entrepreneurs, designers, software engineers. This will be a
                  space to work and collaborate with others. As well as host
                  hackathons, events.
                </p>
              </div>
              <div className="flex-1 p-20">
                <img src="/assets/membership-images.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className="container max-w-screen-xl mx-auto py-16">
            <div
              className="flex flex-col items-center
            "
            >
              <h3 className="text-gray-500 flex items-center font-light text-lg ">
                <span className="mr-4">04/</span>
                <span className="bg-gray-500 h-[1px] w-[130px]"></span>
                <span className="ml-2">Roadmap</span>
              </h3>
            </div>

            <h2 className="mt-10 text-7xl font-bold tracking-wide text-white text-center">
              Roadmap
            </h2>

            <div className="my-20">
              <div>
                <div className="w-full h-[15px] relative">
                  <RoadmapGradient className="inset-0 absolute bg-gradient-to-r from-[#BE2593] to-[#03CEBF]"></RoadmapGradient>
                  <div className="relative ml-44">
                    <div className="w-10 h-10 bg-white rounded-full absolute -top-3"></div>
                    <div className="w-8 h-8 bg-gray-400 rounded-full absolute left-1/4 -top-2"></div>
                    <div className="w-8 h-8 bg-gray-400 rounded-full absolute left-1/2 -top-2"></div>
                    <div className="w-8 h-8 bg-gray-400 rounded-full absolute left-3/4 -top-2"></div>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-neutral-600 mt-10 ml-12">
                  <div className="col-span-1 text-neutral-400">
                    <ul>
                      <li>Launch NFT Collection</li>
                      <li>Start Discord</li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <ul>
                      <li>Launch NFT Collection</li>
                      <li>Start Discord</li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <ul>
                      <li>Launch NFT Collection</li>
                      <li>Start Discord</li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <ul>
                      <li>Launch NFT Collection</li>
                      <li>Start Discord</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container max-w-screen-xl my-20 mx-auto">
          <div className="grid grid-cols-6">
            <div className="col-span-3">
              <img
                src="/assets/mhh-logo-color.svg"
                className="w-[100px] h-[100px]"
              />

              <p className="font-sans font-light text-neutral-400 text-sm max-w-sm">
                The first on-chain co-working space <br />
                for builders and hustlers out in Miami
              </p>
            </div>
          </div>
          <div className="border-t-neutral-200 border-solid border-t-[1px] w-full mt-10 pt-5">
            <span className="font-light text-neutral-600">
              Miami Hack House LLC, All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const RoadmapGradient = styled.div`
  mask-image: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255) 50%,
    transparent 100%
  );
`;
