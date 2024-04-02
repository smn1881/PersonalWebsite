import anime from 'animejs/lib/anime.es.js';
import { useEffect, useState } from 'react';
import text from './Text.json';
import { WhatsForDinner } from "./WhatsForDinner";
import { Weather } from './Weather';

export const Projects = () => {
    const [selected, setSelected] = useState(undefined);

    const weather = <Weather />
    const whatsForDinner = <WhatsForDinner />

    useEffect(() => {
        anime({
            targets: '#weather',
            borderBottomLeftRadius: ['20%', '60%'],
            easing: 'easeInOutSine',
            duration: 2000,
            delay: 400,
            direction: 'alternate',
            loop: true,
            autoplay: true,
        })
        anime({
            targets: '#weather',
            borderBottomRightRadius: ['15%', '50%'],
            easing: 'easeInOutSine',
            duration: 4000,
            delay: 100,
            direction: 'alternate',
            loop: true,
            autoplay: true,
        })
        anime({
            targets: '#weather',
            borderTopLeftRadius: ['20%', '40%'],
            easing: 'easeInOutSine',
            duration: 5000,
            delay: 200,
            direction: 'alternate',
            loop: true,
            autoplay: true,
        })
        anime({
            targets: '#weather',
            borderTopRightRadius: ['30%', '60%'],
            easing: 'easeInOutSine',
            duration: 3000,
            delay: 300,
            direction: 'alternate',
            loop: true,
            autoplay: true,
        });

        anime({
            targets: '#dinner',
            borderBottomLeftRadius: ['20%', '70%'],
            easing: 'easeInOutSine',
            duration: 3000,
            delay: 100,
            direction: 'alternate',
            loop: true,
            autoplay: true,
        })
        anime({
            targets: '#dinner',
            borderBottomRightRadius: ['25%', '60%'],
            easing: 'easeInOutSine',
            duration: 4000,
            delay: 400,
            direction: 'alternate',
            loop: true,
            autoplay: true,
        })
        anime({
            targets: '#dinner',
            borderTopLeftRadius: ['20%', '30%'],
            easing: 'easeInOutSine',
            duration: 2000,
            delay: 300,
            direction: 'alternate',
            loop: true,
            autoplay: true,
        })
        anime({
            targets: '#dinner',
            borderTopRightRadius: ['30%', '50%'],
            easing: 'easeInOutSine',
            duration: 5000,
            delay: 200,
            direction: 'alternate',
            loop: true,
            autoplay: true,
        });
    }, []);

    return (
        <div className='bg-cyan-200 px-4 md:px-12 py-20 w-screen md:min-h-screen'>
            <div className='font-semibold mb-12 text-4xl md:text-5xl'>{text.titles.projects}</div>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/3 mr-6 text-center text-green-50 flex flex-row md:flex-col'>
                    <div 
                        id='weather'
                        className='bg-teal-400 mb-4 mr-6 md:mr-0 py-10 px-4 border border-cyan-300 rounded-md underline underline-offset-4 decoration-dotted decoration-emerald-600' 
                        onClick={() => setSelected(weather)}
                    >
                        {text.projects.weather}
                    </div>
                    <div 
                        id='dinner'
                        className='bg-teal-300 mb-4 py-10 px-4 border border-cyan-200 rounded-md underline underline-offset-4 decoration-dotted decoration-emerald-500' 
                        onClick={() => setSelected(whatsForDinner)}
                    >
                        {text.projects.whatsForDinner}
                    </div>
                </div>
                <div className='flex md:w-2/3'>
                    {selected}
                </div>
            </div>
        </div>
    );
};