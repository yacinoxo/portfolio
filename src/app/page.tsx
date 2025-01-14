"use client"
import { Jaro } from "next/font/google";
import { useRef } from "react";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {motion, useInView } from "motion/react";
import { FaReact } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DiJavascript } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiFlask } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNodejs } from "react-icons/tb";
import Projects from "@/components/Projects";

const jaro = Jaro({ subsets : ['latin']})

export default function Home() {

  const skillsRef = useRef<HTMLParagraphElement>(null)
  const isInViewSkill = useInView(skillsRef, {once: true})





  return (
    <div className="bg-[#2A004E] !w-screen min-h-screen !h-fit p-10 max-sm:p-4 pb-0 overflow-y-auto !overflow-x-hidden scroll-smooth !no-scrollbar">
      <div className="flex justify-center mb-20">
        <motion.header initial={{opacity: 0, bottom: 200}} animate={{top: 0,opacity: 100, transition:{duration: 1.5}}} className="bg-[#2E2E50] relative w-full max-w-6xl h-fit p-8 max-sm:p-4 rounded flex max-md:flex-wrap-reverse max-md:!justify-center max-md:gap-8 !justify-between !items-center">
          <div className="!w-full h-fit max-sm:p-4 p-6 rounded bg-[#1C1C2E] max-w-2xl">
            <p className="text-white text-[40px] font-[Jaro] max-sm:text-[24px] ">Yassine El Kamali</p>
            <p className="text-[14px] max-sm:text-[14px] text-white">I am a passionate web developer with a talent for transforming creative ideas into functional and engaging digital solutions. With a focus on innovation and precision, I thrive on bringing concepts to life, crafting unique projects that leave a lasting impression.</p>
            <button className={`${jaro.className} text-[20px] text-white bg-[#B406DB] hover:bg-[#e119da] rounded px-4 py-1 my-4`}><a href="mailto:y0933335@gmail.com?subject=Hello" target="_blank">Get In Touch</a></button>
          </div>
          <div className="w-72 h-72"><img src="https://musaabk.vercel.app/assets/svg/avatar.svg" alt="f" className="w-full h-full"/></div>
        </motion.header>
      </div>
      
      <div className="flex justify-center mb-20">
      <main className="flex w-full relative max-sm:p-4 !max-w-6xl h-fit py-8 flex-col !justify-between !items-center gap-4 main">
          <Projects/>
          <motion.div initial={{top:100, opacity:0}} animate={isInViewSkill ? {opacity: 100 ,top: 0,transition: {duration: 1.5}} : {}} id="projects" className="w-fit max-sm:max-w-6xl !scale-[.65] max-w-2xl overflow-hidden relative rounded bg-[#2E2E50] !p-6">
            <p className={`${jaro.className} text-white text-7xl mb-8`} ref={skillsRef}>Skills</p>
            <div className="w-[470px] h-fit flex !justify-between !col-span-2 mb-8">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FaHtml5 size={80} color="red"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Html</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FaCss3Alt size={80} color="cyan"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Css</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <DiJavascript size={80} color="yellow"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>JavaScript</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FaReact size={80} color="cyan"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="w-[470px] h-fit flex !justify-between !col-span-2 mb-8">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <RiTailwindCssFill size={80} color="aqua"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tailwind</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <RiNextjsFill size={80} color="white"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Next Js</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <GrMysql size={80} color="aqua"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>MySql</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <IoLogoFirebase size={80} color="orange"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>FireBase</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="w-[470px] h-fit flex !justify-between !col-span-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <SiExpress size={80} color="white"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Express</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <TbBrandFramerMotion size={80} color="purple"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Framer Motion</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <SiFlask size={80} color="white"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Flask</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <TbBrandNodejs size={80} color="Chartreuse"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Node</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </motion.div>
        </main>
      </div>
      <div className="flex justify-center">
        <footer className="bg-[#0D0D0D] w-full !max-w-6xl flex items-center justify-between h-fit p-6 rounded">
          <div>
              <p className="text-2xl sm:text-5xl text-white font-[Jaro] mb-4">Contact</p>
              <div className="flex gap-4">
                <a href="mailto:y0933335@gmail.com?subject=Hello" target="_blank"><MdEmail color="white" className="cursor-pointer sm:size-8"/></a>
              </div>
          </div>
          <p className="text-white font-[Jaro] text-sm lg:text-3xl sm:text-xl md:text-2xl">© 2025 Yassine. All Rights Reserved.</p>
          </footer>
      </div>
    </div>
  );
}