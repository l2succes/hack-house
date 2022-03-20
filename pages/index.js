import Head from "next/head";
import { Header } from "../components/home/Header";
import { MembershipInfo } from "../components/home/MembershipInfo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hack House: Miami</title>
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Spartan:wght@300;400;500;600&display=swap");
        </style>
      </Head>
      <main>
        <Header />

        <div className="bg-[#F6F8FA]">
          <div className="container mx-auto py-16">
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
                  <img src="http://placehold.jp/360x390.png" />
                  <div className="my-5">410-422 NW 25TH ST</div>
                </div>
                <div className="col-span-1 p-4 flex flex-col items-center">
                  <img src="http://placehold.jp/360x390.png" />
                  <div className="my-5">2734 NW 1ST AVE</div>
                </div>
                <div className="col-span-1 p-4 flex flex-col items-center">
                  <img src="http://placehold.jp/360x390.png" />
                  <div className="my-5">2534 N MIAMI AVE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto my-16">
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
      </main>
      <footer></footer>
    </div>
  );
}
