import text from './Text.json';
import { WorkExperience } from './WorkExperience';
import { Projects } from './Projects';
import { Education } from './Education';
import { Contacts } from './Contacts';

const App = () => {
  return (
    <div className='max-w-full'>
      <div className="bg-[url('./downtownLA.jpg')] h-screen w-screen bg-cover bg-center md:bg-top bg-no-repeat p-10">
        <h1 id='firstName' className='m-2 md:m-10 text-sky-300 text-6xl md:text-9xl font-medium pt-24'>{text.header.firstName}</h1>
        <h1 id='lasName' className='m-2 md:m-10 text-sky-400 text-6xl md:text-9xl font-medium'>{text.header.lastName}</h1>
      </div>
      <div className='flex flex-col'>
          <div className='flex flex-row'>
            <div className='text-3xl'>
              <WorkExperience />
              <Education />
              <Projects />
              <Contacts />
            </div>  
          </div>

      </div>
    </div>
  );
}

export default App;
