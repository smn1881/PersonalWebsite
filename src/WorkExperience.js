import anime from 'animejs/lib/anime.es.js';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import text from './Text.json';
import { FaAsterisk } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


export const WorkExperience = () => {
    const containerRef = useRef(null);
    const { ref: strideRef, inView: strideInView, entry: strideEntry } = useInView();
    const { ref: tigerConnectRef, inView: tigerConnectInView, entry: tigerConnectEntry } = useInView();
    const { ref: mcGrawHillRef, inView: mcGrawHillInView, entry: mcGrawHillEntry } = useInView();
    const { ref: bioResearchRef, inView: bioResearchInView, entry: bioResearchEntry } = useInView();

    useEffect(() => {
        anime({
            targets: '#stride #line-true',
            width: [0, (strideEntry?.boundingClientRect?.width - 48)],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 3000,
            delay: 500,
            autoplay: true,
        });

        anime({
            targets: '#strideContainer',
            borderBottomLeftRadius: ['0%', '70%'],
            borderBottomRightRadius: ['0%', '30%'],
            borderTopLeftRadius: ['0%', '10%'],
            borderTopRightRadius: ['0%', '20%'],
            easing: "easeOutExpo",
            duration: 3000,
            delay: 1000,
            autoplay: true,
        });
    }, [strideInView]);

    useEffect(() => {
        anime({
            targets: '#tigerConnect #line-true',
            width: [0, (tigerConnectEntry?.boundingClientRect?.width - 48)],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 3000,
            delay: 500,
            autoplay: true,
        });

        anime({
            targets: '#tigerConnectContainer',
            borderBottomLeftRadius: ['0%', '60%'],
            borderBottomRightRadius: ['0%', '20%'],
            borderTopLeftRadius: ['0%', '15%'],
            borderTopRightRadius: ['0%', '25%'],
            easing: "easeOutExpo",
            duration: 3000,
            delay: 1000,
            autoplay: true,
        });
    }, [tigerConnectInView]);

    useEffect(() => {
        anime({
            targets: '#mcGrawHill #line-true',
            width: [0, (mcGrawHillEntry?.boundingClientRect?.width - 48)],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 3000,
            delay: 500,
            autoplay: true,
        });

        anime({
            targets: '#mcGrawHillContainer',
            borderBottomLeftRadius: ['0%', '70%'],
            borderBottomRightRadius: ['0%', '30%'],
            borderTopLeftRadius: ['0%', '15%'],
            borderTopRightRadius: ['0%', '25%'],
            easing: "easeOutExpo",
            duration: 3000,
            delay: 1000,
            autoplay: true,
        });
    }, [mcGrawHillInView]);

    useEffect(() => {
        anime({
            targets: '#bioResearch #line-true',
            width: [0, (bioResearchEntry?.boundingClientRect?.width - 48)],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 3000,
            delay: 500,
            autoplay: true,
        });

        anime({
            targets: '#bioResearchContainer',
            borderBottomLeftRadius: ['0%', '70%'],
            borderBottomRightRadius: ['0%', '60%'],
            borderTopLeftRadius: ['0%', '30%'],
            borderTopRightRadius: ['0%', '40%'],
            easing: "easeOutExpo",
            duration: 3000,
            delay: 1000,
            autoplay: true,
        });
    }, [bioResearchInView]);

    return (
        <div className='flex flex-col bg-emerald-100 px-4 md:px-12 py-20 w-screen md:min-h-screen'>
            <div className='font-semibold mb-12 text-4xl md:text-5xl flex flex-row'>
                <div className='w-11/12'>
                    {text.titles.workExperience}
                </div>
                <a className='w-1/12' href='https://www.linkedin.com/in/stefanie-nunez/' target="_blank" rel="noopener noreferrer">
                    <CiLinkedin className='w-12 h-12'/>
                </a>
            </div>
            <div className='flex flex-row'>
                <div className='md:mr-6'>
                    <div id='strideContainer' ref={strideRef} className='mb-4 flex flex-col md:flex-row bg-green-300 bg-opacity-30 p-6'>
                        <div className='mr-8 shrink-0 w-60 whitespace-nowrap'>
                            <div  id='stride' className='font-semibold flex flex-col'>
                                {text.jobs.strideHealth}
                                <span id={`line-${strideInView}`} className='bg-black h-1'></span>
                            </div>
                            <p className='text-lg md:text-xl mb-2'>{text.strideHealth.date}</p>
                        </div>
                        <ul className='mt-2 md:mt-12'>
                            <li className='mb-2 text-xl md:text-2xl'>{text.strideHealth.first}</li>
                            <li className='mb-2 text-lg md:text-xl'>{text.strideHealth.second}</li>
                        </ul>
                    </div>
                    <div id='tigerConnectContainer' ref={tigerConnectRef} className='mb-4 flex flex-col md:flex-row bg-teal-300 bg-opacity-30 p-6'>
                        <div className='mr-8 shrink-0 w-60 whitespace-nowrap'>
                            <div id='tigerConnect' className='font-semibold flex flex-col'>
                                {text.jobs.tigerConnect}
                                <span id={`line-${tigerConnectInView}`} className='bg-black h-1'></span>
                            </div>
                            <p className='text-lg md:text-xl mb-2'>{text.tigerConnect.date}</p>
                        </div>
                        <ul className='mt-2 md:mt-12'>
                            <li className='mb-2 text-xl md:text-2xl'>{text.tigerConnect.first}</li>
                            <li className='mb-2 text-lg md:text-xl'>{text.tigerConnect.second}</li>
                        </ul>
                    </div>
                    <div id='mcGrawHillContainer' ref={mcGrawHillRef} className='mb-4 flex flex-col md:flex-row bg-cyan-300 bg-opacity-30 p-6'>
                        <div className='mr-8 shrink-0 w-60 whitespace-nowrap'>
                            <div id='mcGrawHill' className='font-semibold flex flex-col'>
                                {text.jobs.mcGrawHill}
                                <span id={`line-${mcGrawHillInView}`} className='bg-black h-1'></span>
                            </div>
                            <p className='text-lg md:text-xl mb-2'>{text.mcGrawHill.date}</p>
                        </div>
                        <ul className='mt-2 md:mt-12'>
                            <li className='mb-2 text-xl md:text-2xl'>{text.mcGrawHill.first}</li>
                            <li className='mb-2 text-lg md:text-xl'>{text.mcGrawHill.second}</li>
                        </ul>
                    </div>
                    <div id='bioResearchContainer' ref={bioResearchRef} className='mb-2 flex flex-col md:flex-row bg-sky-300 bg-opacity-30 p-6'>
                        <div className='mr-8 shrink-0 w-60 whitespace-nowrap'>
                            <div id='bioResearch' className='font-semibold flex flex-col'>
                                {text.jobs.bioResearch}
                                <span id={`line-${bioResearchInView}`} className='bg-black h-1'></span>
                            </div>
                            <p className='text-lg md:text-xl mb-2'>{text.bioResearch.date}</p>
                        </div>
                        <ul className='mt-2 md:mt-12'>
                            <li className='mb-2 text-xl md:text-2xl'>{text.bioResearch.first}</li>
                            <li className='mb-2 text-lg md:text-xl'>{text.bioResearch.second}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}