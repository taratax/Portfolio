import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { LanguageProps, static_texts } from "@/data";



const Hero: React.FC<LanguageProps> = ({ language }) => {

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className='"-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill="white"
        />
        <Spotlight
          className='"-top-10 left-full h-[80vh] w-[50vw]'
          fill="purple"
        />
        <Spotlight className='"top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0 ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 z-0 ">
            {language === "pl" ? static_texts[0].hero1[1] : static_texts[0].hero1[0]}
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={language === "pl" ? static_texts[0].hero0[1] : static_texts[0].hero0[0]}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text lg:text-2xl z-0">
            {language === 'en' ? static_texts[0].hero2[0] : static_texts[0].hero2[1]}
          </p>
          <a href="#about">
            <MagicButton
              title={language === 'en' ? static_texts[0].button[0] : static_texts[0].button[1]}
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
