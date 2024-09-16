"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useContext, useEffect, useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

import { static_texts } from "@/data";
import { LanguageContext } from "@/app/layout";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  LanguageContext
  return (
    <div
      className={cn(
        "grid grid-cols1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  titleClassName,
  imgClassName,
  title,
  description,
  header,
  icon,
  id,
  spareImg,
}: {
  className?: string;
  titleClassName?: string;
  imgClassName?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: string;
  id: number;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  let timer: NodeJS.Timeout;
  const handleCopy = () => {
    navigator.clipboard.writeText("gabriel.kieruzel@protonmail.com");
    setCopied(true);
    timer = setTimeout(() => {
      setCopied(false);
      clearTimeout(timer);
    }, 5000)
  };

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    clearTimeout(timer)
  }, []);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl \
        transition duration-200 shadow-input dark:shadow-none \
        justify-between flex flex-col space-y-4 border border-white/[0.1] ",
        className,
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,44,74,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {icon && (
            <img
              src={icon}
              alt={icon}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4l lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento: translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          )}

        >
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 pb-10">
            {title}
          </div>

          {/* {id === 2 && <GlobeDemo />} */}

          {id === 3 && (
            <div className="grid grid-cols-2 gap-4 lg:gap-8 w-full -right-3 lg:-right-2" >
              <div className="flex flex-col justify-between">
                {static_texts[7].tech_1?.map((item) => (
                  <span key={item} className="py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                ))}
              </div>
              <div className="flex flex-col justify-between">
                {"Kotlin" && (<span key={"Kotlin"} className="py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{"Kotlin"}</span>)}
                {static_texts[7].tech_2?.map((item) => (
                  <span key={item} className="py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                ))}
              </div>
            </div>
          )}

          {/* {id === 3 && (
            // flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2
            <div className="flex gap-1 lg:gap-5 w-full  -right-3 lg:-right-2"
              style={{ backgroundColor: 'yellow' }}
            >
              <div className="flex flex-col  gap-3 lg:gap-8">
                {["Frontend", "iOS", "SQL", "Kotlin"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-2 lg:gap-8">
                <span className="py-4 px-1 rounded-lg text-center text-sm bg-[#10132e]" />
                {["Android", "Bash", "Unix"].map((item) => {
                  return (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          )} */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                {copied && <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />}
              </div>
              <MagicButton
                title={copied ?
                  (language === "pl" ? (static_texts[1].grid_email_copied[1] as string) : (static_texts[0].grid_email_copied[0] as string)) :
                  (language === "pl" ? (static_texts[1].grid_email[1] as string) : (static_texts[0].grid_email as string))
                }
                icon={<IoCopyOutline />} // TODO - correct this line - we hae an issue with missing elemet '<IoCopyOutline />'
                position="left"
                theClasses="!bg-[#161a31"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
