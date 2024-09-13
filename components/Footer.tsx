import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia, LanguageProps, static_texts } from '@/data'


const Footer: React.FC<LanguageProps> = ({ language }) => {
    let text_field: string[] = [];
    let contact_text: string = "";
    let letstalk_text: string = "";

    if (language === "pl") {
        text_field = static_texts[6].want_proj[1].split(' ');
        contact_text = static_texts[6].contact_proj[1];
        letstalk_text = static_texts[6].lets_talk[1];
    } else {
        text_field = static_texts[6].want_proj[0].split(' ');
        contact_text = static_texts[6].contact_proj[0];
        letstalk_text = static_texts[6].lets_talk[0];
    }

    return (
        <footer className='w-full pb-10 mb-[100px] md:mb-5' id="contact">
            {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
                <img src="./footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
            </div> */}
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    {`${text_field[0]} ${text_field[1]}`} <span className='text-purple'>{`${text_field[2] || ''}`}</span> {`${text_field[3] || ''}`}
                </h1>
                <p className='text-white-100 md:mt-10 my-5 text-center'>{contact_text}</p>
                <a href="mailt:gabriel.kieruzel@protonmail.com">
                    <MagicButton
                        title={letstalk_text}
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>
                    2024 Gabriel Kieruzel
                </p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((media, idx) => {
                        return (
                            <div key={idx} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-55 bg-black-200 rounded-lg border border-black-300'>
                                <img src={media.img} alt="media_image" width={20} height={20} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer