"use client"
import { useRef } from "react";
import { Jaro } from "next/font/google";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
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


const jaro = Jaro({ subsets : ['latin']})


function Skills() {

    const skillsRef = useRef<HTMLParagraphElement>(null)
    const isInViewSkill = useInView(skillsRef, {once: true})
    
  return (
    <div>
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
    </div>
  )
}

export default Skills