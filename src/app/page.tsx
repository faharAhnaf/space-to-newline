"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";

export default function Home() {
  const [text, setText] = useState("");
  // const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // const adjustTextareaHeight = () => {
  //   if (textAreaRef.current) {
  //     textAreaRef.current.style.height = "auto";
  //     textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  //   }
  // };

  // useEffect(() => {
  //   adjustTextareaHeight();
  // }, [text]);

  // const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   setText(e.target.value);
  // };

  return (
    <div className="flex min-h-screen flex-col">
      <FloatingNav
        className=""
        navItems={[
          { name: "Home", link: "/" },
          { name: "About", link: "/about" },
        ]}
      />
      <HeroHighlight>
        <div>
          <p className="mx-1 text-center text-5xl font-bold leading-snug md:text-6xl">
            Convert Your Way,&nbsp;<Highlight>Every Day</Highlight>
          </p>
        </div>
      </HeroHighlight>
      <section className="dark:bg-black flex-grow">
        <div className="mx-4 grid space-y-5">
          <textarea
            className="border-xl mt-10 grid h-40 md:h-56 w-[40vh] mx-auto items-center resize-none rounded-lg border p-3 leading-none dark:bg-white dark:text-black"
            name="textarea"
            id="textarea"
            // ref={textAreaRef}
            rows={1}
            // value={text}
            // onChange={handleTextareaChange}
          />

          <div className="mx-auto grid grid-cols-2 space-x-3">
            <ButtonsCard>
              <button className="relative p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent">
                  Newline To Space
                </div>
              </button>
            </ButtonsCard>
            <ButtonsCard>
              <button className="relative p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent">
                  Space To Newline
                </div>
              </button>
            </ButtonsCard>
          </div>
        </div>
      </section>
      <footer className="bg-white text-white p-4">
        <div>your footer here</div>
      </footer>
    </div>
  );
}
