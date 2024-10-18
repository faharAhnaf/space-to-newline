"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ModeToggle } from "@/components/ui/mode-toggle";

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

  const handleSpaceToNewline = () => {
    // e.preventDefault();
    const updatedText = text.replace(/ /g, "\n");
    setText(updatedText);
  };

  const handleNewlineToSpace = () => {
    // e.preventDefault();
    const updatedText = text.replace(/\n/g, " ");
    setText(updatedText);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="m-4 flex justify-between">
        <div>tes</div>
        <div>
          <ModeToggle />
        </div>
      </nav>
      <HeroHighlight>
        <div>
          <p className="mx-1 text-center text-5xl font-bold leading-snug md:text-6xl">
            Convert Your Way,&nbsp;<Highlight>Every Day</Highlight>
          </p>
        </div>
      </HeroHighlight>
      <section className="flex-grow dark:bg-black">
        <div className="mx-4 grid space-y-5">
          <textarea
            className="border-xl mx-auto mt-10 grid h-40 w-[40vh] resize-none items-center rounded-lg border-4 p-3 leading-none md:h-56 dark:bg-white dark:text-black"
            name="textarea"
            id="textarea"
            // ref={textAreaRef}
            rows={1}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="mx-auto grid grid-cols-2 space-x-3 md:space-x-3">
            <ButtonsCard onClick={handleSpaceToNewline}>
              <button className="relative p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="group relative rounded-[6px] bg-white px-8 py-2 transition duration-200 hover:bg-transparent hover:text-white dark:bg-black dark:text-white dark:hover:bg-transparent">
                  Space To Newline
                </div>
              </button>
            </ButtonsCard>
            <ButtonsCard onClick={handleNewlineToSpace}>
              <button className="relative p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="group relative rounded-[6px] bg-white px-8 py-2 transition duration-200 hover:bg-transparent hover:text-white dark:bg-black dark:text-white dark:hover:bg-transparent">
                  Newline To Space
                </div>
              </button>
            </ButtonsCard>
          </div>
        </div>
      </section>
      <footer className="dark:bg-black">
        <div className="flex w-full flex-row items-center justify-center">
          <div className="m-10 flex mr-14">
            <AnimatedTooltip
              items={[
                {
                  id: 1,
                  name: "Fahar Ahnaf Azis",
                  designation: "10122448",
                  image: "/images/fahar-ahnaf-azis.jpeg",
                },
                {
                  id: 2,
                  name: "Christian Andri Siahaan",
                  designation: "10122297",
                  image: "/images/christian-andri-siahaan.jpeg",
                },
                {
                  id: 3,
                  name: "Dylan Edlyano",
                  designation: "10122410",
                  image: "/images/dylan-edlyano.jpeg",
                },
                {
                  id: 4,
                  name: "Bagas Wahyu Andrianto",
                  designation: "10122264",
                  image: "/images/bagas-wahyu.jpeg",
                },
                {
                  id: 5,
                  name: "Fadhil Muhammad",
                  designation: "10122443",
                  image: "/images/fadhil-muhammad.jpeg",
                },
                {
                  id: 6,
                  name: "Sultan Razzan Iza Saloewa",
                  designation: "11122403",
                  image: "/images/sultan-razzan.jpeg",
                },
                {
                  id: 7,
                  name: "Devina Putri Gitani",
                  designation: "10122361",
                  image: "/images/devina-putri-gitani.jpeg",
                },
                {
                  id: 8,
                  name: "Velin Alivia Putri",
                  designation: "10122011",
                  image: "/images/velin-alivia.jpeg",
                },
              ]}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
