import { workExperience, LanguageProps, static_texts } from '@/data'

import React from 'react'
import { Button } from './ui/MovingBorders'


const Experience: React.FC<LanguageProps> = ({ language }) => {

    let text_field: string[] = [];

    if (language === "pl") {
        text_field = static_texts[4].experience_head[1].split(' ');
    } else {
        text_field = static_texts[4].experience_head[0].split(' ');
    }

    return (
        <div id='experience' className="py-20">
            <h1 className="heading">
                {`${text_field[0]} `}
                {' '}
                <span className="text-purple">{`${text_field[1]} ${text_field[2] || ''}`}</span>
            </h1>
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((exp, idx) => {
                    return (
                        // <div key={idx}>{exp.title}</div>
                        <Button key={exp.id} borderRadius='1.75rem'
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                        >
                            <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                                <img src={exp.thumbnail} alt={exp.thumbnail} className='lg:w-32 md:w-20 w-16' />
                                <div className='lg:ms-5'>
                                    <h1 className='text-start text-xl md:text-2xl font-bold'>
                                        {language === "pl" ? exp.title[1] : exp.title[0]}
                                    </h1>
                                    <p className='text-start text-white-100 mt-3 font-semibold'>
                                        {language === "pl" ? exp.desc[1] : exp.desc[0]}
                                    </p>
                                </div>
                            </div>

                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience