"use client"
import { motion, useInView } from 'motion/react'
import { Jaro } from "next/font/google";
import { redirect } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { RiExternalLinkFill } from 'react-icons/ri'


const jaro = Jaro({ subsets : ['latin']})


function Projects() {
    
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
        <motion.div initial={{top:100, opacity:0}} animate={isInViewProject ? {opacity: 100 ,top: 0,transition: {duration: 1.5}} : {}} id="projects" className="w-fit !scale-[.65] overflow-hidden relative h-fit max-w-2xl rounded bg-[#2E2E50] p-6">
            <p className={`${jaro.className} text-white text-7xl mb-8`} ref={ProjectRef}>Projects</p>
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
                      <p className={`${jaro.className} text-white text-7xl mb-8`}>{project.title}</p>
                      <div className="bg-[#3E3E6B] w-[470px] h-[239.25px] mb-10 p-6 overflow-scroll">
                        <p className="text-white text-md font-mono">{project.description}</p>
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
    </div>
  )
}

export default Projects