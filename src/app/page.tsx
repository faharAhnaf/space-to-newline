"use client";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useState } from "react";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [text, setText] = useState("");
  const [showCopied, setShowCopied] = useState(false);
  // const { theme, setTheme } = useTheme();

  // useEffect(() => {
  //   setTheme("system");
  // }, [setTheme]);

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
    <div className="relative flex flex-col dark:bg-black">
      <nav className="absolute z-10 mx-auto flex w-screen items-center justify-between px-10 py-5 md:fixed">
        <svg
          width="150"
          height="50"
          viewBox="0 0 868 301"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_0_1)">
            <rect
              x="4"
              width="860"
              height="293"
              rx="35"
              // fill="#9C27B0"
              className="fill-[#BA68C8] dark:fill-[#9C27B0]"
            />
            <rect
              x="5.5"
              y="1.5"
              width="857"
              height="290"
              rx="33.5"
              stroke="black"
              stroke-width="3"
            />
          </g>
          <rect x="531" y="44" width="302" height="206" rx="35" fill="black" />
          <path
            d="M573.588 190V102.727H586.756V140.653H630.264V102.727H643.474V190H630.264V151.946H586.756V190H573.588ZM703.091 162.855V124.545H715.875V190H703.347V178.665H702.665C701.159 182.159 698.744 185.071 695.42 187.401C692.125 189.702 688.02 190.852 683.105 190.852C678.901 190.852 675.179 189.929 671.94 188.082C668.73 186.207 666.202 183.438 664.355 179.773C662.537 176.108 661.628 171.577 661.628 166.179V124.545H674.369V164.645C674.369 169.105 675.605 172.656 678.077 175.298C680.548 177.94 683.759 179.261 687.707 179.261C690.094 179.261 692.466 178.665 694.824 177.472C697.21 176.278 699.185 174.474 700.747 172.06C702.338 169.645 703.119 166.577 703.091 162.855ZM734.018 190V102.727H746.759V135.156H747.526C748.265 133.793 749.33 132.216 750.722 130.426C752.114 128.636 754.046 127.074 756.518 125.739C758.989 124.375 762.256 123.693 766.319 123.693C771.603 123.693 776.319 125.028 780.467 127.699C784.614 130.369 787.867 134.219 790.225 139.247C792.612 144.276 793.805 150.327 793.805 157.401C793.805 164.474 792.626 170.54 790.268 175.597C787.91 180.625 784.671 184.503 780.552 187.23C776.433 189.929 771.731 191.278 766.447 191.278C762.469 191.278 759.217 190.611 756.688 189.276C754.188 187.94 752.228 186.378 750.808 184.588C749.387 182.798 748.293 181.207 747.526 179.815H746.461V190H734.018ZM746.504 157.273C746.504 161.875 747.171 165.909 748.506 169.375C749.842 172.841 751.773 175.554 754.302 177.514C756.83 179.446 759.927 180.412 763.592 180.412C767.398 180.412 770.58 179.403 773.137 177.386C775.694 175.341 777.626 172.571 778.933 169.077C780.268 165.582 780.935 161.648 780.935 157.273C780.935 152.955 780.282 149.077 778.975 145.639C777.697 142.202 775.765 139.489 773.18 137.5C770.623 135.511 767.427 134.517 763.592 134.517C759.898 134.517 756.773 135.469 754.217 137.372C751.688 139.276 749.771 141.932 748.464 145.341C747.157 148.75 746.504 152.727 746.504 157.273Z"
            fill="white"
          />
          <path
            d="M118.074 126.108H104.778C104.267 123.267 103.315 120.767 101.923 118.608C100.531 116.449 98.8267 114.616 96.8097 113.111C94.7926 111.605 92.5341 110.469 90.0341 109.702C87.5625 108.935 84.9347 108.551 82.1506 108.551C77.1222 108.551 72.6193 109.815 68.642 112.344C64.6932 114.872 61.5682 118.58 59.267 123.466C56.9943 128.352 55.858 134.318 55.858 141.364C55.858 148.466 56.9943 154.46 59.267 159.347C61.5682 164.233 64.7074 167.926 68.6847 170.426C72.6619 172.926 77.1364 174.176 82.108 174.176C84.8636 174.176 87.4773 173.807 89.9489 173.068C92.4489 172.301 94.7074 171.179 96.7244 169.702C98.7415 168.224 100.446 166.42 101.838 164.29C103.259 162.131 104.239 159.659 104.778 156.875L118.074 156.918C117.364 161.207 115.986 165.156 113.94 168.764C111.923 172.344 109.324 175.44 106.142 178.054C102.989 180.639 99.3807 182.642 95.3182 184.062C91.2557 185.483 86.8239 186.193 82.0227 186.193C74.4659 186.193 67.733 184.403 61.8239 180.824C55.9148 177.216 51.2557 172.06 47.8466 165.355C44.4659 158.651 42.7756 150.653 42.7756 141.364C42.7756 132.045 44.4801 124.048 47.8892 117.372C51.2983 110.668 55.9574 105.526 61.8665 101.946C67.7756 98.3381 74.4943 96.5341 82.0227 96.5341C86.6534 96.5341 90.9716 97.2017 94.9773 98.5369C99.0114 99.8437 102.634 101.776 105.844 104.332C109.054 106.861 111.71 109.957 113.812 113.622C115.915 117.259 117.335 121.42 118.074 126.108ZM160.379 186.321C154.242 186.321 148.887 184.915 144.313 182.102C139.739 179.29 136.188 175.355 133.66 170.298C131.131 165.241 129.867 159.332 129.867 152.571C129.867 145.781 131.131 139.844 133.66 134.759C136.188 129.673 139.739 125.724 144.313 122.912C148.887 120.099 154.242 118.693 160.379 118.693C166.515 118.693 171.87 120.099 176.444 122.912C181.018 125.724 184.569 129.673 187.097 134.759C189.626 139.844 190.89 145.781 190.89 152.571C190.89 159.332 189.626 165.241 187.097 170.298C184.569 175.355 181.018 179.29 176.444 182.102C171.87 184.915 166.515 186.321 160.379 186.321ZM160.421 175.625C164.398 175.625 167.694 174.574 170.308 172.472C172.921 170.369 174.853 167.571 176.103 164.077C177.381 160.582 178.021 156.733 178.021 152.528C178.021 148.352 177.381 144.517 176.103 141.023C174.853 137.5 172.921 134.673 170.308 132.543C167.694 130.412 164.398 129.347 160.421 129.347C156.415 129.347 153.092 130.412 150.45 132.543C147.836 134.673 145.89 137.5 144.612 141.023C143.362 144.517 142.737 148.352 142.737 152.528C142.737 156.733 143.362 160.582 144.612 164.077C145.89 167.571 147.836 170.369 150.45 172.472C153.092 174.574 156.415 175.625 160.421 175.625ZM217.854 146.136V185H205.112V119.545H217.342V130.199H218.152C219.658 126.733 222.016 123.949 225.226 121.847C228.464 119.744 232.541 118.693 237.456 118.693C241.916 118.693 245.822 119.631 249.175 121.506C252.527 123.352 255.126 126.108 256.973 129.773C258.82 133.437 259.743 137.969 259.743 143.366V185H247.001V144.901C247.001 140.156 245.766 136.449 243.294 133.778C240.822 131.08 237.428 129.73 233.109 129.73C230.155 129.73 227.527 130.369 225.226 131.648C222.953 132.926 221.149 134.801 219.814 137.273C218.507 139.716 217.854 142.67 217.854 146.136ZM330.482 119.545L306.746 185H293.109L269.331 119.545H283.01L299.587 169.915H300.268L316.803 119.545H330.482ZM368.44 186.321C361.991 186.321 356.437 184.943 351.778 182.188C347.147 179.403 343.567 175.497 341.039 170.469C338.539 165.412 337.289 159.489 337.289 152.699C337.289 145.994 338.539 140.085 341.039 134.972C343.567 129.858 347.09 125.866 351.607 122.997C356.153 120.128 361.465 118.693 367.545 118.693C371.238 118.693 374.817 119.304 378.283 120.526C381.749 121.747 384.86 123.665 387.616 126.278C390.371 128.892 392.545 132.287 394.136 136.463C395.727 140.611 396.522 145.653 396.522 151.591V156.108H344.491V146.562H384.036C384.036 143.21 383.354 140.241 381.991 137.656C380.627 135.043 378.71 132.983 376.238 131.477C373.795 129.972 370.925 129.219 367.63 129.219C364.05 129.219 360.925 130.099 358.255 131.861C355.613 133.594 353.567 135.866 352.119 138.679C350.698 141.463 349.988 144.489 349.988 147.756V155.213C349.988 159.588 350.755 163.31 352.289 166.378C353.852 169.446 356.025 171.79 358.809 173.409C361.593 175 364.846 175.795 368.567 175.795C370.982 175.795 373.184 175.455 375.173 174.773C377.161 174.062 378.88 173.011 380.329 171.619C381.778 170.227 382.886 168.509 383.653 166.463L395.712 168.636C394.746 172.187 393.013 175.298 390.513 177.969C388.042 180.611 384.931 182.67 381.181 184.148C377.46 185.597 373.212 186.321 368.44 186.321ZM410.659 185V119.545H422.974V129.943H423.656C424.849 126.42 426.952 123.651 429.963 121.634C433.003 119.588 436.44 118.565 440.276 118.565C441.071 118.565 442.009 118.594 443.088 118.651C444.196 118.707 445.062 118.778 445.688 118.864V131.051C445.176 130.909 444.267 130.753 442.96 130.582C441.653 130.384 440.347 130.284 439.04 130.284C436.028 130.284 433.344 130.923 430.986 132.202C428.656 133.452 426.81 135.199 425.446 137.443C424.082 139.659 423.401 142.187 423.401 145.028V185H410.659ZM491.135 119.545V129.773H455.382V119.545H491.135ZM464.97 103.864H477.712V165.781C477.712 168.253 478.081 170.114 478.82 171.364C479.558 172.585 480.51 173.423 481.675 173.878C482.868 174.304 484.161 174.517 485.553 174.517C486.575 174.517 487.47 174.446 488.237 174.304C489.004 174.162 489.601 174.048 490.027 173.963L492.328 184.489C491.589 184.773 490.538 185.057 489.175 185.341C487.811 185.653 486.107 185.824 484.061 185.852C480.709 185.909 477.584 185.312 474.686 184.062C471.788 182.812 469.445 180.881 467.655 178.267C465.865 175.653 464.97 172.372 464.97 168.423V103.864Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_0_1"
              x="0"
              y="0"
              width="868"
              height="301"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div>
          <ModeToggle />
        </div>
      </nav>
      <HeroHighlight>
        <p className="mx-1 text-center text-3xl font-bold leading-tight md:mx-10 md:text-6xl md:leading-normal">
          Text Transformation Made Easy:&nbsp;
          <Highlight>Switch Between Spaces and Newlines!</Highlight>
        </p>
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
