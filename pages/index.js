import Head from "next/head";
import { Header } from "../components/home/Header";
import { MembershipCard } from "../components/home/MembershipCard";

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

        <div className="container mx-auto my-16">
          <div className="mx-auto mb-8">
            <div className="my-4">
              <h3 className="text-gray-400 flex items-center font-light">
                <span className="mr-4">00/</span>
                <span className="tracking-[-.25em] h-[1px] bg-gray-400 w-[130px] inline-block self-center"></span>
                <span className="ml-2 ">What is Miami Hack House</span>
              </h3>

              <h2 className="mt-10 text-4xl font-bold">
                Co-Working + Web3 + <span className="text-[#]">Miami</span>
              </h2>

              <p className="mt-4 text-gray-400">
                We’re building the first on-chain co-working space for creators,
                engineers, designers. Miami have a permanent space to connect
                with other Miami locals or traveling entrepreneurs. As a members
                only community, we will take and review applications to join.
                Accepted applicants will then have the opportunity to mint their
                membership NFT at launch.
              </p>
            </div>
          </div>
          <div className="mx-auto mb-8">
            <h3 className="font-sans font-medium text-3xl my-4 text-center tracking-wider">
              ROADMAP
            </h3>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="">
              <h3>March 2022</h3>
              <ul>
                <li>Launch NFT Collection</li>
                <li>Initialize token distribution</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto my-16">
          <div className="mx-auto mb-8">
            <h3 className="font-sans font-medium text-3xl my-4 text-center tracking-wider">
              MEMBERSHIPS
            </h3>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2">
              <MembershipCard type="1x" />
            </div>
            <div className="col-span-2">
              <MembershipCard type="10x" />
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
