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
