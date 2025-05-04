import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import Btnfirst from './buttons/First';
import AOS from 'aos';
import 'aos/dist/aos.css';
import QrHub from "../Assets/projects/QrHub.png"
import sfera_systems from "../Assets/projects/sfera.png"
import SferaAcademy from "../Assets/projects/SferaAcademy.png"
import bookers from "../Assets/projects/bookers.jpg"

function Projects() {
  useEffect(() => {
    AOS.init({
      // Bu yerda sizning sozlamalaringiz, masalan:
      duration: 1000,
      once: false, // faqat bir marta animatsiyani ishga tushirish 
    });
  }, []);

  const [listProjects] = useState([
    {
      "name": "Sfera edu",
      "type": "educational management system",
      "des": "A comprehensive system for educational centers that manages student registrations, attendance, assessments, video tutorials, and evaluates student performance while monitoring the status of the educational center.",
      "mission": "To systematize the management of educational centers and enhance the educational process through efficient use of technology.",
      "language": "React js, Zustand, React query, Typescript, Ant design, Tailwind",
      "images": sfera_systems,
      "link": "http://sferaedu.uz/auth",
      "github": "https://github.com/Alisher0903/edu-platform"
    },
    {
      "name": "QR - Hub",
      "type": "Facilitate payment via QR and exchange RUB to UZS",
      "des": "Web Dashboard to control",
      "mission": "Facilitate payment via QR and exchange RUB to UZS",
      "language": "Vite + React.js and TypeScript Material Ui,Tailwind CSS",
      "images": QrHub,
      "link": "",
      "github": "https://github.com/Alisher0903/QrHup"
    },
    {
      "name": "Sfera Academy",
      "type": "The main purpose of the Sfera Academy website is to offer users high-quality education in modern IT fields, provide detailed information about courses, enable easy registration, and establish effective communication between students and instructors.",
      "des": "Sfera Academy is a modern educational center that provides training in various IT fields.",
      "mission": "Sfera Academy is a modern educational center that provides training in various IT fields.",
      "language": "Next.js, Tailwind ",
      "images": SferaAcademy,
      "link": "https://www.sferaacademy.uz/",
      "github": "https://github.com/Alisher0903/sfera-education-center"
    },
    {
      "name": "Bookers",
      "type": "Mobile Application for Beauty and Wellness Services",
      "des": "Bookers is a mobile application dedicated to beauty and wellness services. Users can easily book various services, manage their time and statistics. They also have the option to choose service times in beauty salons.",
      "mission": "To provide users with the best beauty and health services and make them easily accessible.",
      "language": "React js, Tailwindcss, Firebase, Ant Design",
      "images": bookers,
      "link": "",
      "github": "https://github.com/abdulazizsaidovcode"
    }
  ]);


  return (
    <section>
      <div className='w-full generall__border py-5'>
        <div className='w-max generall__border mx-auto py-5'>

          <div className="font-museo-moderno font-system mt-0 mb-10 text-center text-[5vw] flex justify-center items-end md:px-36" >
            <p data-cursor-style>My Projects</p>
          </div>

          <div className=" text-center max-w-[500px] m-auto flex justify-center items-end" >
            <p className='px-3'>A brief overview of my projects.</p>
          </div>

        </div>
      </div>
      <div className="list mt-14 ">
        {
          listProjects.map((value, key) => (
            <div
              className=' md:p-5 h-max grid lg:grid-cols-2 grid-cols-1 justify-between  md:mb-56 mb-20 lg:gap-16 md:gap-10 gap-5 '
              key={key}
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >

              <div className='generall__border md:p-4 p-2  flex justify-center items-center'>
                <div className="generall__border rel col-start-2 col-end-3 bg-gradient-to-tr dynamic-style-bg to-[#3600fb68] md:p-10 p- text-center rounded-xl overflow-hidden h-full w-ful ">
                  <img src={value.images} alt="rasm" className='w-full h-full rounded-xl hover:scale-105 transition-all object-cover' />
                </div>
              </div>

              <div className="col-start-1 col-end-2 row-start-1">
                <div className='generall__border p-4'>

                  <div className='md:p-5 p-3 generall__border mb-3'>
                    <h3 data-cursor-style className='text-5xl m-0 w-max'>{value.name}</h3>
                    <p data-cursor-style className="text-left w-full text-white mt-5">{value.des}</p>
                  </div>

                  <div className='md:p-5 p-2 generall__border'>

                    <div className="rel grid grid-cols-[70px,1fr] items-center md:gap-3 gap-1">
                      <div className='bg-[#cccccc54] md:w-14 md:h-14 w-10 h-10 text-xl flex justify-center items-center rounded-md'><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                      <div>
                        <h4 data-cursor-style className='w-max'>Mission</h4>
                        <div data-cursor-style className="text-xs">{value.mission}</div>
                      </div>
                    </div>

                    <div className="rel grid grid-cols-[70px,1fr] items-center md:gap-3 gap-1 mt-3">
                      <div className='bg-[#cccccc54] md:w-14 md:h-14 w-10 h-10 text-xl flex justify-center items-center rounded-md'><FontAwesomeIcon icon={faEarthAmericas} /></div>
                      <div>
                        <h4 data-cursor-style className='w-max'>Languages</h4>
                        <div data-cursor-style className="">{value.language}</div>
                      </div>
                    </div>

                  </div>

                  <div className=" mt-10">

                    <div className='flex gap-3 flex-wrap md:justify-start justify-center w-full'>
                      <Btnfirst text='github' link='https://github.com/abdulazizsaidovcode' />
                      <Btnfirst text='live' link={value.link} />
                      <Btnfirst text='view more' link={value.github} />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default Projects
