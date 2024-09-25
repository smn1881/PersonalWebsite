import text from '../Text.json';
import jobsList from './workExperienceText.json';
import { Job } from './Job';
import { CiLinkedin } from "react-icons/ci";


export const WorkExperience = () => {
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
                    {jobsList.map((job, index) => <Job job={job} index={index} />)}
                </div>
            </div>
        </div>
    )
}