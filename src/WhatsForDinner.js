import anime from 'animejs/lib/anime.es.js';
import { useEffect, useState } from 'react';

import text from './Text.json';

import { IoIosClose } from "react-icons/io";


export const WhatsForDinner = () => {
    const initialDinnerList = [
        'Tacos Por Favor', 
        'California Chicken Cafe', 
        'Kazu Nori',
        'Ono Hawaiian BBQ',
        'El Pollo Loco'
    ];
    const [selected, setSelected] = useState('');
    const [input, setInput] = useState('');
    const [dinnerList, setDinnerList] = useState(initialDinnerList);

    useEffect(() => {
        anime({
            targets: '#dinnerContainer',
            borderRadius: ['0%', '10%'],
            translateX: ['50%', 0],
            easing: "easeOutExpo",
            duration: 3000,
            delay: 50,
            autoplay: true,
        });
    }, []);

    useEffect(() => {
        anime.timeline({
            targets: '#selectedResturant #rotateOptions',
            keyframes: [
              {translateY: -20, opacity: 0, duration:0},
              {translateY: 0, opacity:1, duration: 50},
              {translateY: 20, opacity:0, delay: 50, duration: 50},
            ],
            easing: 'linear',
            delay: anime.stagger(150, {start: 0}),
            loop: 1
        }).add({
            targets: '#selectedResturant #rotateOptions',
            opacity: 0,
            easing: 'easeOutExpo',
        }).add({
            targets: '#selectedResturant #selected',
            opacity: '100%',
            easing: 'easeOutExpo',
        });
    }, [selected]);

    const addItem = () => {
        if (input) {
            setDinnerList([...dinnerList, input]);
            setInput('');
            setSelected('')
        }
    };

    const removeItem = (index) => {
        dinnerList.splice(index, 1);
        setDinnerList([...dinnerList]);
    };

    const selectDinner = () => {
        const randomNumber = Math.floor(Math.random() * dinnerList.length);
        setSelected(dinnerList[randomNumber])
    }

    return (
        <div id='dinnerContainer' className="flex flex-col bg-[url('./dinner-image.jpg')] bg-cover max-h-5/6 2md:min-h-[400px] w-full p-8">
            <h1 className='text-white font-semibold mb-4'>{text.whatsForDinner.title}</h1>
            <div className='flex flex-row mb-6'>
                <div className='mr-2 md:mr-8 bg-white bg-opacity-40 p-4 rounded-md w-1/2'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='text-lg md:text-3xl font-medium mb-2 w-5/6'>{text.whatsForDinner.list}</div>
                        <button className='bg-white bg-opacity-60 whitespace-nowrap w-fit h-fit p-1 rounded-md text-base' onClick={() => setDinnerList([])}>
                            {text.whatsForDinner.clear}
                        </button>
                    </div>
                    <ul className='flex flex-col text-lg'>
                        {dinnerList.map((item, index) => {
                            return (
                                <li className='mt-2 flex flex-row'>
                                    <div className='w-3/4 md:w-5/6'>{item}</div>
                                    <div className='w-1/4 md:w-1/6'>
                                        <button 
                                            className='ml-5 bg-white rounded-full w-4 h-4 align-top bg-opacity-80' 
                                            onClick={() => removeItem(index)}
                                        >
                                            <IoIosClose className='w-4 h-4'/>
                                        </button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='flex flex-col w-1/2'>
                    <input 
                        type="text" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        className='mb-2 p-2 rounded-md bg-white bg-opacity-40'
                    ></input>
                    <button 
                        onClick={addItem} 
                        className='w-fit mt-2 p-2 bg-sky-200 bg-opacity-60 border border-sky-400 rounded-md text-lg md:text-3xl'
                    >
                        {text.whatsForDinner.addButton}
                    </button>
                    {selected && (
                        <div>
                            <div 
                                id='selectedResturant' 
                                className='text-lg md:text-4xl font-semibold bg-white bg-opacity-80 border border-sky-500 rounded-md mt-10 p-2 md:p-4 h-20'
                            >
                                <div id='container' className='relative'>
                                    {dinnerList.map((resturant) => {
                                        return (
                                            <span id='rotateOptions' className='w-5/6 absolute overflow-hidden text-ellipsis whitespace-nowrap'>
                                                {resturant}
                                            </span>
                                        )
                                    })}   
                                    <span id='selected' className='w-11/12 absolute opacity-0 overflow-hidden text-ellipsis md:whitespace-nowrap'>
                                        {selected}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button 
                onClick={selectDinner} 
                className='mt-2 p-2 bg-sky-200 bg-opacity-60 border border-sky-400 rounded-md text-lg md:text-3xl'
            >
                {text.whatsForDinner.button}
            </button>
        </div>
    )
};