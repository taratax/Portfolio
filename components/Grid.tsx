import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { LanguageProps, gridItems, static_texts } from "@/data";



const Grid: React.FC<LanguageProps> = ({ language }) => {

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, index) => (
          <BentoGridItem
            id={item.id}
            key={index}
            title={language === "pl" ? item.title[1] : item.title[0]}
            description={language === "pl" ? item.description[1] : item.description[0]}
            className={item.className}
            icon={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
