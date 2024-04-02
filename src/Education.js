import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';

import text from './Text.json';

import UCLALogo from './ucla-logo.png';
import USCLogo from './usc-logo.png';
import TheoUCLA from './theo-ucla.jpg';
import RoyceHall from './royce-hall.jpg';
import GradUSC from './usc-grad.jpg';


export const Education = () => {
    useEffect(() => {
        anime({
            targets: '#theo-ucla',
            translateX: function() { return anime.random(20, 50); },
            rotate: function() { return anime.random(-30, -10); },
            borderRadius: ['10%', '20%'],
            easing: 'easeInOutElastic',
            duration: 4000,
            direction: 'alternate',
            loop: true,
            autoplay: true,
        });
        anime({
            targets: '#royce-hall',
            translateX: function() { return anime.random(-10, 10); },
            rotate: function() { return anime.random(-15, 15); },
            borderRadius: ['10%', '20%'],
            easing: 'easeInOutElastic',
            duration: 4000,
            direction: 'alternate',
            loop: true,
            autoplay: true,
        });
        anime({
            targets: '#grad-usc',
            translateX: function() { return anime.random(-50, -20); },
            rotate: function() { return anime.random(10, 30); },
            borderRadius: ['10%', '20%'],
            easing: 'easeInOutElastic',
            duration: 4000,
            direction: 'alternate',
            loop: true,
            autoplay: true,
        });
    }, [])



    return (
        <div className='text-white bg-black px-4 md:px-12 py-20 w-screen md:min-h-screen'>
            <h2 className='font-semibold mb-12 text-4xl md:text-5xl'>{text.titles.education}</h2>
            <div className='flex flex-col'>
                <div id='ucla' className='flex flex-row mb-6 bg-white bg-opacity-10 p-2 md:p-10 border rounded border-blue-600 border-dashed'>
                    <div className='text-blue-600 mr-6 text-2xl md:text-4xl font-semibold w-1/4 content-center'>
                        {text.education.UCLA}
                    </div>
                    <div className='flex flex-col mr-6 w-1/2 self-center'>
                        <p className='text-yellow-400 text-xl md:text-3xl'>{text.education.uclaDegree}</p>
                        <p className='text-yellow-400 text-lg md:text-2xl'>{text.education.uclaYears}</p>
                    </div>
                    <img id='ucla-logo' src={UCLALogo} alt="UCLA Logo" className='w-12 h-12 md:w-24 md:h-24'/>
                </div>
                <div id='usc' className='flex flex-row mb-16 md:mb-6 bg-white bg-opacity-10 p-2 md:p-10 border rounded border-red-800 border-dashed'>
                    <div className='text-red-800 mr-6 text-2xl md:text-4xl font-semibold w-1/4 content-center'>
                        {text.education.USC}
                    </div>
                    <div className='flex flex-col mr-6 w-1/2 self-center'> 
                        <div className='text-amber-400 text-xl md:text-3xl'>{text.education.uscDegree}</div>
                        <div className='text-amber-400 text-lg md:text-2xl'>{text.education.uscYears}</div>
                    </div>
                    <img src={USCLogo} alt="USC Logo" className='w-12 h-12 md:w-24 md:h-24'/>
                </div>
            </div>
            <div className='flex flex-row'>
                <img id='theo-ucla' src={TheoUCLA} alt="Dog at UCLA" className='w-1/3 py-2 md:py-10 px-1 md:px-5'/>
                <img id='royce-hall' src={RoyceHall} alt="Royce Hall at UCLA" className='w-1/3 py-2 md:py-10 px-1 md:px-5'/>
                <img id='grad-usc' src={GradUSC} alt="Grad at USC" className='w-1/3 py-2 md:py-10 px-1 md:px-5'/>
            </div>
        </div>
    )
}