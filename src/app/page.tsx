"use client";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useEffect, useState } from "react";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const [text, setText] = useState("");
  const [showCopied, setShowCopied] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("system");
  }, [setTheme]);

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000); // Hilangkan notifikasi setelah 2 detik
  };

  return (
    <div className="flex min-h-screen flex-col dark:bg-black">
      <nav className="fixed z-10 mx-auto flex w-screen items-center justify-between p-10">
        {theme === "light" ? (
          <Image
            alt="Logo Convert Hub"
            src="/logo/convert-hub-light.png"
            width={100}
            height={100}
            className="h-auto w-auto"
          />
        ) : (
          <Image
            alt="Logo Convert Hub"
            src="/logo/convert-hub-dark.png"
            width={100}
            height={100}
            className="h-auto w-auto"
          />
        )}

        <div>
          <ModeToggle />
        </div>
      </nav>
      <HeroHighlight>
        <div>
          <p className="mx-1 text-center text-3xl font-bold leading-tight md:mx-10 md:text-6xl md:leading-normal">
            Text Transformation Made Easy:&nbsp;
            <Highlight>Switch Between Spaces and Newlines!</Highlight>
          </p>
        </div>
      </HeroHighlight>
      <section className="flex-grow dark:bg-black">
        <div className="mx-4 grid space-y-5">
          <div className="relative mx-auto mt-10 w-full max-w-[24rem] md:max-w-[26rem]">
            <textarea
              className="border-xl h-52 w-full resize-none rounded-lg border-4 p-3 leading-none md:h-56 dark:placeholder:text-white"
              name="textarea"
              id="textarea"
              rows={1}
              placeholder="Insert Here"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute right-3 top-3 cursor-pointer"
              onClick={copyToClipboard}
            />
            {showCopied && (
              <div className="absolute right-3 top-10 rounded bg-purple-300 px-2 py-1 text-sm text-black dark:bg-purple-500 dark:text-white">
                Copied!
              </div>
            )}
          </div>

          <div className="mx-auto grid grid-cols-2 space-x-3 md:space-x-3">
            <ButtonsCard onClick={handleSpaceToNewline}>
              <button className="relative p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="group relative rounded-[6px] bg-white px-8 py-2 transition duration-200 hover:bg-transparent hover:text-white dark:bg-black dark:text-white dark:hover:bg-transparent">
                  <p className="text-[13px] md:text-[16px]">Space To Newline</p>
                </div>
              </button>
            </ButtonsCard>
            <ButtonsCard onClick={handleNewlineToSpace}>
              <button className="relative p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="group relative rounded-[6px] bg-white px-8 py-2 transition duration-200 hover:bg-transparent hover:text-white dark:bg-black dark:text-white dark:hover:bg-transparent">
                  <p className="text-[13px] md:text-[16px]">Newline To Space</p>
                </div>
              </button>
            </ButtonsCard>
          </div>
        </div>
      </section>
      <footer className="dark:bg-black">
        <div className="flex w-full flex-row items-center justify-center md:justify-between">
          <div>
            <p className="m-10 hidden bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent md:flex dark:from-indigo-500 dark:to-purple-500">
              ICIKIWIR PROJECT
            </p>
          </div>
          <div className="m-10 mr-14 flex">
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
