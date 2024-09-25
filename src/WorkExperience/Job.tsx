import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { useInView } from 'react-intersection-observer';

const cssColor = [
    'bg-green-300',
    'bg-emerald-300',
    'bg-teal-300',
    'bg-cyan-300',
    'bg-sky-300',
]
const borderBottomLeftRadius = [
    ['0%', '50%'],
    ['0%', '50%'],
    ['0%', '40%'],
    ['0%', '60%'],
    ['0%', '70%'],
]
const borderBottomRightRadius = [
    ['0%', '50%'],
    ['0%', '30%'],
    ['0%', '20%'],
    ['0%', '30%'],
    ['0%', '60%'],
]

const borderTopLeftRadius = [
    ['0%', '20%'],
    ['0%', '10%'],
    ['0%', '15%'],
    ['0%', '15%'],
    ['0%', '30%'],
]

const borderTopRightRadius = [
    ['0%', '30%'],
    ['0%', '20%'],
    ['0%', '25%'],
    ['0%', '25%'],
    ['0%', '40%'],
]

export const Job = ({job, index}) => {
    const { ref: jobRef, inView: jobInView, entry: jobEntry } = useInView();

    useEffect(() => {
        if (jobEntry?.boundingClientRect?.width) {
            anime({
                targets: `#${job.name} #line-true`,
                width: [0, (jobEntry?.boundingClientRect?.width - 48)],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 3000,
                delay: 500,
                autoplay: true,
            });
        }

        anime({
            targets: `#${job.name}Container`,
            borderBottomLeftRadius: borderBottomLeftRadius[index],
            borderBottomRightRadius: borderBottomRightRadius[index],
            borderTopLeftRadius: borderTopLeftRadius[index],
            borderTopRightRadius: borderTopRightRadius[index],
            easing: "easeOutExpo",
            duration: 3000,
            delay: 1000,
            autoplay: true,
        });
    }, [jobInView, jobEntry?.boundingClientRect?.width, job.name, index]);

    return (
        <div id={`${job.name}Container`} ref={jobRef} className={`mb-4 flex flex-col md:flex-row ${cssColor[index]} bg-opacity-30 p-6`}>
            <div className='mr-8 shrink-0 w-60 whitespace-nowrap'>
                <div  id={job.name} className='font-semibold flex flex-col'>
                    {job.title}
                    <span id={`line-${jobInView}`} className='bg-black h-1'></span>
                </div>
                <p className='text-lg md:text-xl mb-2'>{job.date}</p>
            </div>
            <ul className='mt-2 md:mt-12'>
                <li className='mb-2 text-xl md:text-2xl'>{job.first}</li>
                <li className='mb-2 text-lg md:text-xl'>{job.second}</li>
            </ul>
        </div>
    )
}