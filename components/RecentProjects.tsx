import { projects } from '@/data/index'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import { LanguageProps, static_texts } from "@/data";

const RecentProjects: React.FC<LanguageProps> = ({ language }) => {
    let text_field: string[] = [];
    let text_website_project: string;

    if (language === "pl") {
        text_field = static_texts[2].proj_head[1].split(' ');
        text_website_project = static_texts[2].proj_check[1];

    } else {
        text_field = static_texts[2].proj_head[0].split(' ');
        text_website_project = static_texts[2].proj_check[0];
    }

    return (
        <div id='projects' className="py-20">
            <h1 className="heading">
                {`${text_field[0]} ${text_field[1]}`}
                {' '}
                <span className="text-purple">
                    {`${text_field[2]} ${text_field[3]}`}
                </span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link }) => {
                    return (
                        <div key={id}
                            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]" suppressHydrationWarning={true}>
                            <PinContainer title={link} href={`${id === 1 || id === 2 ? link : ''}`}>
                                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                        <img src="/bg.png" alt="bg-img" />
                                    </div>
                                    <img src={img} alt={title} className="z-10 absolute bottom-0" />
                                </div>
                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {title}
                                </h1>
                                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                    {language === "pl" ? des[1] : des[0]}
                                </p>
                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {iconLists.map((icon, idx) => {
                                            return (
                                                <div key={icon}
                                                    className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                    style={{ transform: `translateX(-${5 * idx * 2}px)` }}
                                                    suppressHydrationWarning={true}
                                                >
                                                    <img src={icon} alt={icon} className="p-2" suppressHydrationWarning={true} />

                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <p className='flex lg:text-xl md:text-xs text-sm text-purple'>{text_website_project}</p>
                                        <FaLocationArrow className='ms-3' color="#CBACF9" />
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    )
                })}

            </div >
        </div >
    )
}

export default RecentProjects