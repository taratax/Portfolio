"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { div } from "three/webgpu";
import { workExperience, LanguageProps, static_texts } from '@/data'
import { LanguageContext } from "@/app/layout";
import { useContext, useState } from "react";

const Process = () => {
    const { language } = useContext(LanguageContext);

    let text_field: string[] = [];


    if (language === "pl") {
        text_field = static_texts[5].approach_head[1].split(' ');


    } else {
        text_field = static_texts[5].approach_head[0].split(' ');
    }

    return (
        <section className="w-full py-20">
            <h1 className="heading">
                {`${text_field[0]} `}
                <span className="text-purple">{`${text_field[1] || ''}`}</span>
            </h1>
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
                <Card title={language === "pl" ? static_texts[5].phases_title[0][1] : static_texts[5].phases_title[0][0]}
                    icon={<AceternityIcon order={language === "pl" ? static_texts[5].pahses_list[0][1] : static_texts[5].pahses_list[0][0]} />} description="lorem impsum">
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title={language === "pl" ? static_texts[5].phases_title[1][1] : static_texts[5].phases_title[1][0]}
                    icon={<AceternityIcon order={language === "pl" ? static_texts[5].pahses_list[1][1] : static_texts[5].pahses_list[1][0]} />} description="lorem ipsum 2">
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={4}
                    />

                </Card>
                <Card title={language === "pl" ? static_texts[5].phases_title[2][1] : static_texts[5].phases_title[2][0]}
                    icon={<AceternityIcon order={language === "pl" ? static_texts[5].pahses_list[2][1] : static_texts[5].pahses_list[2][0]} />} description="lorem ipsum 3">
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </section >
    );
}

const Card = ({
    title,
    icon,
    description,
    children,
}: {
    title: string;
    icon: React.ReactNode;
    description: string;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  lg:h-[35rem] relative rounded-3xl"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
                    {title}
                </h2>
                <h2 className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{ color: '#e4ecff' }}>
                    {description}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent text-2xl font-bold">
                    {order}
                </div>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

export default Process;