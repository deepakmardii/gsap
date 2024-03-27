"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  let box = useRef(null);
  useEffect(() => {
    console.log(box);
    gsap.to(box, 1.5, { rotation: 27, x: 0, duration: 1 });
  }, []);
  return (
    <main className="flex flex-col">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div
        ref={(el) => {
          box = el;
        }}
        className="h-10 w-10 bg-red-600 rounded-md"
      ></div>
    </main>
  );
}
