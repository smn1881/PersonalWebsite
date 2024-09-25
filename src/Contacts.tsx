import text from './Text.json';

import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Contacts = () => {
    return (
        <div className='px-4 md:px-12 py-20 flex flex-col w-screen'>
          <h2 className='font-semibold mb-12 text-4xl md:text-5xl text-center'>{text.titles.contacts}</h2>
          <div className='flex flex-row text-center self-center'>
            <a className='mr-4 md:mr-16' href='https://www.linkedin.com/in/stefanie-nunez/' target="_blank" rel="noopener noreferrer">
              <CiLinkedin className='w-24 h-24 md:w-36 md:h-36 text-green-400'/>
            </a>
            <a className='mr-4 md:mr-16' href='https://github.com/smn1881' target="_blank" rel="noopener noreferrer">
              <FaGithub className='w-24 h-24 md:w-36 md:h-36 text-teal-400' />
            </a>
            <a href='mailto:stefaniemnunez@gmail.com' target="_blank" rel="noopener noreferrer">
              <MdOutlineEmail className='w-24 h-24 md:w-36 md:h-36 text-cyan-400'/>
            </a>
          </div>
        </div>
    )
}