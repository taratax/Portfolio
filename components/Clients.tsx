import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'
import { LanguageProps, static_texts } from "@/data";


const Clients: React.FC<LanguageProps> = ({ language }) => {

    let text_field: string[] = [];

    if (language === "pl") {
        text_field = static_texts[3].client_head[1].split(' ');
    } else {
        text_field = static_texts[3].client_head[0].split(' ');
    }

    return (

        <div id='testimonials' className="py-20">
            <h1 className="heading">
                {`${text_field[0]} `}
                {' '}
                <span className="text-purple">{`${text_field[1]} ${text_field[2]}`}</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">

                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />
                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                    {companies.map((company, idx) => {
                        return (
                            <div key={idx} className='flex md:max-w-60 max-w-32 gap-2'>
                                <img src={company.img} alt={company.name} className='md:w-10 w-5' />
                                <img src={company.nameImg} alt={company.name} className='md:w-24 w-20' />
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>


    )
}

export default Clients