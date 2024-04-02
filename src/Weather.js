import anime from 'animejs/lib/anime.es.js';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

import text from './Text.json';

export const Weather = () => {
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [input, setInput] = useState('');
    const API_KEY = 'dba82064115e42ca94e70220243003';

    useEffect(() => {
        anime({
            targets: '#weatherContainer',
            borderRadius: ['0%', '10%'],
            translateX: ['50%', 0],
            easing: "easeOutExpo",
            duration: 3000,
            delay: 50,
            autoplay: true,
        });
    }, []);


    useEffect(() => {
        if (data?.error) {
            setError(true);
            if (data.error.message.startsWith('Parameter q')) {
                setErrorMessage('Enter in your zipcode or cityname.')
            }
            if (data.error.message.startsWith('No matching location')) {
                setErrorMessage('Location not found, re-enter in your zipcode or cityname.')
            }
        } 
    }, [data]);

    const makeApiCall = async () => {
        setError(false);
        setErrorMessage(undefined);
        await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input}&aqi=no`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    };

    return (
        <div id='weatherContainer' className="bg-[url('./weather-image.jpg')] min-h-[400px] w-full bg-cover px-4 md:px-12 py-12 grow">
            <h2 className='text-white font-semibold mb-8'>{text.weather.title}</h2>
            <div className='flex flex-row'>
                <div className='flex flex-col mr-6 w-2/3'>
                    <input 
                        className={classNames('grow bg-sky-100 p-2', {'border-2 border-red-500': error})}
                        placeholder={text.weather.placeholder} 
                        type="text" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}>
                    </input>
                    <p className='text-base text-red-500 font-medium'>{errorMessage}</p>
                </div>
                <button 
                    className='w-1/3 text-white text-xl p-2 bg-sky-900 bg-opacity-30 rounded-md border border-sky-800 rounded-md' 
                    onClick={makeApiCall}
                >
                    {text.weather.checkWeather}
                </button>
            </div>
            {data?.current && 
                <div className='flex flex-row p-8 bg-white bg-opacity-20 mt-8 rounded-md'>
                    <div className="mr-8">
                        <div className='text-4xl md:text-5xl font-semibold'>{data?.location?.name}</div>
                        <p>{data?.current?.condition?.text}</p>
                        <p>{data?.current?.temp_f} F</p>
                    </div>
                    <img className='w-24 h-24' src={data?.current?.condition?.icon} alt="weather icon" />
                </div>
            }
        </div>
    )
}