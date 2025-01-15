"use client"
import { Jaro } from "next/font/google";
import { MdEmail } from "react-icons/md";
import {motion, useInView } from "motion/react";
import { redirect } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { RiExternalLinkFill } from 'react-icons/ri'
import Image from "next/image";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
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

export default function Home() {

    const skillsRef = useRef<HTMLParagraphElement>(null)
    const isInViewSkill = useInView(skillsRef, {once: true})
    const [project, setProject] = useState<number>(1)
    const sliderRef = useRef<HTMLDivElement>(null)
    const ImageRef = useRef<HTMLImageElement>(null)
    const projectDes = useRef<HTMLDivElement>(null)
    const ProjectRef = useRef<HTMLParagraphElement>(null)
    const isInViewProject = useInView(ProjectRef, {once: true})
    const [currentPosition, setCurrentPosition] = useState(0); // Tracks slider position
    const [currentDesPosition, setCurrenDestPosition] = useState(0); // Tracks slider position


    const Projects = [
            {
              "src" : "https://i.ibb.co/6JnJx0Z/replit.png",
              "title" : "Landing page",
              "description" : "I created a fully responsive landing page as my first step into web development. It features a clean, adaptable design for mobile, tablet, and desktop screens, emphasizing user experience and structured code. This project reflects my early enthusiasm for crafting user-friendly websites and mastering fundamental web technologies.",
              "key" : 1,
              "link" : "developers.tiiny.site/"
            },{
              "src" : "https://i.ibb.co/ZMFsJBy/weka.png",
              "title" : "Weka Chats",
              "description" : "Weka Chats is a web application inspired by Messenger, allowing users to connect effortlessly. Simply use usernames to send messages to friends or join the Global Chats to share messages visible to all users. It combines simplicity and connectivity in one platform, perfect for seamless communication.",
              "key" : 2,
              "link": "weka-chat.vercel.app/"
            },{
              "src" : "https://i.ibb.co/56W2NyF/old-Portfolio.png",
              "title" : "Old Portfolio",
              "description" : "This portfolio, built with Next.js, Tailwind CSS, and Framer Motion, highlights my early skills in web development. Designed specifically for larger screens like tablets and desktops, it showcases my foundation in creating visually engaging web applications, with a focus on smooth animations and clean design.",
              "key" : 3,
              "link" : "yacinoc-portfolio.vercel.app",
          },{
            "src" : "https://i.ibb.co/n801g2d/Blogwide.png",
            "title" : "BlogWide",
            "description" : "Blog Wide is a responsive blog platform designed to deliver visually appealing and well-structured content. Built with a focus on SEO optimization, it features three content categories and highlights my ability to create large-scale web applications with an emphasis on great design and functionality. This project reflects my expertise in combining user-friendly layouts with performance-driven development.",
            "key" : 4,
            "link" : "Blogwide.vercel.app"
          },{
            "src" : "https://i.ibb.co/JvzNqNm/notion.png",
            "title" : "Notion Clone",
            "description" : "Notion Clone is a web application that allows users to create and share documents with an intuitive and user-friendly interface. It offers features like adding images, customizing colors, resizing elements, and more. Security is a top priority—only you can invite collaborators or delete your documents, and no one can access them without your permission. This project demonstrates my skills in building feature-rich, secure, and user-focused applications.",
            "key" : 5,
            "link": "yacinoc-notion.vercel.app"
          }
        ]
        
        
        const imageW = ImageRef.current?.width
        
        const slideLeft = () => {
            if (sliderRef.current && imageW) {
              const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
              setCurrentPosition((prev) => Math.max(prev - (imageW + 24), -maxScroll));
            }
            if(project !== Projects.length){
              setProject(project+1)
            }
        }
        
        const slideRight = () => {
            if (sliderRef.current && imageW) {
              setCurrentPosition((prev) => Math.min(prev + (imageW + 24), 0));
            }
            if(project !== 1){
              setProject(project-1)
            }
        }
        
        const OpenProjectDescription = () => {
            if(projectDes.current){
              setCurrenDestPosition((prev) => Math.min(prev - 471.24, 0))
            }
        }
        
        const CloseProjectDescription = () => {
            if(projectDes.current){
              setCurrenDestPosition((prev) => Math.min(prev + 471.24, 0))
            }
        }
        
        function VisiteProject(link: string){
            redirect("https://" + link)
        }
        
        let filtredProject = Projects.filter(miniproject => miniproject.key == project) // eslint-disable-line
    

  return (
    <div>
        <div className="bg-[#2A004E] !w-screen min-h-screen !h-fit p-10 max-sm:p-4 pb-0 overflow-y-auto !overflow-x-hidden scroll-smooth !no-scrollbar">
          <div className="flex justify-center mb-20">
            <motion.header initial={{opacity: 0, bottom: 200}} animate={{top: 0,opacity: 100, transition:{duration: 1.5}}} className="bg-[#2E2E50] relative w-full max-w-6xl h-fit p-8 max-sm:px-4 max-sm:pb-4 max-sm:pt-10 rounded flex max-md:flex-wrap-reverse max-md:!justify-center max-md:gap-8 !justify-between !items-center" dir="rtl">
              <div className="!w-full h-fit max-sm:p-4 p-6 rounded bg-[#1C1C2E] max-w-2xl">
                <p className="text-white text-[40px] font-[Jaro] max-sm:text-[24px]">ياسين الكمالي</p>
                <p className="text-[14px] max-sm:text-[14px] text-white">أنا مطوّر ويب شغوف أتمتع بموهبة تحويل الأفكار الإبداعية إلى حلول رقمية عملية وجذابة. أركز على الابتكار والدقة، وأجد متعتي في تحويل المفاهيم إلى واقع ملموس من خلال تصميم مشاريع فريدة تترك انطباعًا دائمًا.</p>
                <button className={`${jaro.className} text-[20px] text-white bg-[#B406DB] hover:bg-[#e119da] rounded px-4 py-1 my-4`}><a href="mailto:y0933335@gmail.com?subject=Hello" target="_blank">للتواصل</a></button>
            </div>
              <div className="w-72 h-72"><Image src="/assets/svg/avatar.svg" width="252" height="267" alt="avatar" className="w-full h-full"/></div>
            </motion.header>
        </div>
        
        <div className="flex justify-center mb-20">
          <main className="flex w-full relative max-sm:p-4 !max-w-6xl h-fit py-8 flex-col !justify-between !items-center !gap-4 main">
            <motion.div initial={{top:100, opacity:0}} animate={isInViewProject ? {opacity: 100 ,top: 0,transition: {duration: 1.5}} : {}} id="projects" className="w-fit !scale-[.65] overflow-hidden relative h-fit max-w-2xl rounded bg-[#2E2E50] p-6">
              <p className={`text-white text-7xl mb-8`} ref={ProjectRef} dir="rtl">المشاريع</p>
              <div className="w-[470px] overflow-x-hidden">
                <motion.div animate={{ x: currentPosition, transition: { duration: 0.5 } }} className="flex scroll-smooth gap-x-6 relative no-scrollbar" ref={sliderRef}>
                  {Projects.map((project) => (
                    <div key={project.key}>
                      <div className="w-[470px] max-sm:scale-100 h-fit mb-10 shadow-lg shadow-[#1C1C2E] ">
                        <img src={project.src} ref={ImageRef} alt="blog" className="w-full rounded-sm h-[239.25px]"/>
                      </div>
                    </div>))}
                  </motion.div>
                </div>
                            
                
                {filtredProject.map((project, i) => (
                  <div key={i}>
                    <motion.div animate={{y: currentDesPosition, transition: {duration: 1}}} className="w-full h-full bg-[#1C1C2E] p-6 absolute top-full left-0" ref={projectDes}>
                      <p className={`${jaro.className} text-white text-7xl mb-8`} dir="rtl">{project.title}</p>
                      <div className="bg-[#3E3E6B] w-[470px] h-[239.25px] mb-10 p-6 overflow-scroll">
                        <p className="text-white text-md font-mono" dir="rtl">{project.description}</p>
                      </div>
                      <div className="flex justify-between">
                        <FaArrowAltCircleDown size={40} onClick={()=> CloseProjectDescription()} color="#B406DB" className="cursor-pointer"/>
                        {project.link && (
                          <RiExternalLinkFill size={40} onClick={()=>VisiteProject(project.link)} color="white" className="cursor-pointer"/>
                        )}
                      </div>
                    </motion.div>
                  </div>
                  ))}
                
                  <div className="flex justify-between">
                    <FaArrowAltCircleUp size={40} onClick={() => OpenProjectDescription()} color="#B406DB" className="cursor-pointer"/>
                    <div className="flex gap-x-2">
                      <FaArrowAltCircleLeft size={40} onClick={()=> slideRight()} color="#B406DB" className="cursor-pointer"/>
                      <FaArrowAltCircleRight size={40} onClick={()=> slideLeft()} color="#B406DB" className="cursor-pointer"/>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{top:100, opacity:0}} animate={isInViewSkill ? {opacity: 100 ,top: 0,transition: {duration: 1.5}} : {}} id="projects" className="w-fit max-sm:max-w-6xl !scale-[.65] max-w-2xl overflow-hidden relative rounded bg-[#2E2E50] !p-6">
              <p className={`text-white text-7xl mb-8`} ref={skillsRef} dir="rtl">المهارات</p>
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
            <footer className="bg-[#0D0D0D] w-full !max-w-6xl flex items-center justify-between h-fit p-6 rounded" dir="rtl">
            <div>
                <p className="text-2xl sm:text-5xl text-white font-[Jaro] mb-4">اتصل بنا</p>
                <div className="flex gap-4">
                    <a href="mailto:y0933335@gmail.com?subject=Hello" target="_blank"><MdEmail color="white" className="cursor-pointer sm:size-8"/></a>
                </div>
            </div>
            <p className="text-white text-sm lg:text-3xl sm:text-xl md:text-2xl" dir="ltr">{"ياسين جميع الحقوق محفوظة "}</p>
            </footer>
        </div>
        </div>
    </div>
  );
}