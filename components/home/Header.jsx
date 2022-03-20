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
              <menu className="flex justify-center self-center">
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
            </div>
          </div>
          <div className="mt-4 align-middle">
            <div className="py-2 text-center">
              <h1 className="font-sans font-semibold text-7xl pb-4">
                Let&apos;s build the
                <br />
                future together
              </h1>

              <p className="font-sans font-normal text-xl mt-4 max-w-md mx-auto">
                The first on-chain co-working space for builders and hustlers
                out in Miami
              </p>

              <button className="shadow-sm rounded-md bg-indigo-800	text-red-200 py-3 px-6 mt-8 mb-4">
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
