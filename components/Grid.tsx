import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { LanguageProps, gridItems, static_texts } from "@/data";


const Grid: React.FC<LanguageProps> = ({ language }) => {

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item: { id: number; title: (string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined)[]; description: (string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined)[]; className: string | undefined; img: string | undefined; imgClassName: string | undefined; titleClassName: string | undefined; spareImg: string | undefined; }, index: React.Key | null | undefined) => (
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
