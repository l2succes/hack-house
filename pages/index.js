import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import cls from "classnames";
import { House } from "../components/House";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hack House: Miami</title>
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Spartan:wght@300;400;500;600&display=swap");
        </style>
      </Head>
      <main>
        <div className="relative overflow-hidden max-w-full pb-8">
          <div className={styles.heroBackground}></div>
          <div className={styles.heroBackgroundInner}></div>

          <div className={cls(styles.heroContent, "m-10 py-2")}>
            <div className="container mx-auto">
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-2">
                  <div className={cls(styles.logo, "my-5")}></div>
                  <div className="py-2">
                    <h1 className="font-sans font-semibold text-4xl pb-4">
                      Let's build the
                      <br />
                      future together
                    </h1>

                    <p className="font-sans text-2xl mt-4">
                      The first on-chain co-working space for builders and
                      hustlers out in Miami
                    </p>

                    <button className="shadow-sm rounded-md bg-indigo-800	text-gray-50 py-3 px-6 mt-8 mb-4">
                      Join Discord
                    </button>
                  </div>
                </div>

                <div className="col-span-2">
                  <menu className="float-right flex flex-row">
                    <li className="mx-4">
                      <a>Memberships</a>
                    </li>
                    <li className="mx-4">
                      <a>Blog</a>
                    </li>
                    <li className="mx-4">
                      <a>Plan</a>
                    </li>
                  </menu>
                  <div className="my-4 relative p-[90px] py-[150px]">
                    <House />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.grid}></div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
