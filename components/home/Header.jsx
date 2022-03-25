import React from "react";
import { House } from "../House";
import styles from "./Header.module.css";
import cls from "classnames";

export const Header = () => {
  return (
    <div className="relative overflow-hidden max-w-full pb-8">
      <div className={styles.heroBackground}></div>
      <div className={styles.heroBackgroundInner}></div>
      <div className="inset-0 bg-black opacity-50 z-10 absolute"></div>

      <div className={cls(styles.heroContent, "m-10 mt-5 py-2 z-20")}>
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex w-full justify-center mb-20">
            <div className={cls(styles.logo)}></div>
            <div className="flex flex-grow"></div>
            <div className="flex items-center">
              <menu className="text-sm lg:text-base flex justify-center self-center">
                <li className="mx-1 lg:mx-4">
                  <a>Memberships</a>
                </li>
                <li className="mx-1 lg:mx-4">
                  <a>Blog</a>
                </li>
                <li className="mx-1 lg:mx-4">
                  <a>Plan</a>
                </li>
              </menu>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex">
              <div className="py-2 antialiased flex-grow text-center lg:text-left">
                <h1 className="font-sans font-semibold text-4xl lg:text-7xl pb-4">
                  Let&apos;s build the
                  <br />
                  future together
                </h1>

                <p className="font-sans font-normal text-gray-300 text-md lg:text-xl mt-4">
                  The first on-chain co-working space for
                  <br />
                  builders and hustlers out in Miami
                </p>

                <button className="shadow-sm rounded-md bg-white text-black py-4 px-8 mt-8 mb-4">
                  Join the Waitlist
                </button>
              </div>
              <div className="hidden lg:block">
                <House />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
