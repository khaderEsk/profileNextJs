"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';
import { FaLaravel, FaHtml5, FaCss3, FaNodeJs, FaPhp, FaJs } from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';


const about = {
    title: "About Me",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Khader Eskander",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+963) 930 668 517",
        },
        {
            fieldName: "Experience",
            fieldValue: "+3 Year",
        },
        {
            fieldName: "GitHub",
            fieldValue: "/",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Syrian",
        },
        {
            fieldName: "Email",
            fieldValue: "khader9es@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Arabic, English",
        },
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My experience",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    item: [
        {
            company: "Tech Solutions Inc.",
            position: "Full stack Developer",
            duration: "2023 - Present"
        },
        {
            company: "E-commerce startup",
            position: "Freelance Web Developer",
            duration: "Summer 2022"
        },
        {
            company: "SoftWare developer",
            position: "junior Developer",
            duration: "2021 -2022"
        },
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: "My education",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    item: [
        {
            institution: "Online Course platform",
            degree: "Full stack Wed Development Bootcamp",
            duration: "2022"
        },
        {
            institution: "CodeCademy",
            degree: "FrontEnd Track",
            duration: "2023"
        },
        {
            institution: "Online Course",
            degree: "Programming Course",
            duration: "2020 -2021"
        },
        {
            institution: "CodeCademy",
            degree: "FrontEnd Track",
            duration: "2023"
        },
        {
            institution: "Tech Institute",
            degree: "Certified Web Developer",
            duration: "2021"
        },
        {
            institution: "Information Technology Engineer",
            degree: "Associate Degree in Computer Science",
            duration: "2019-2024"
        }
    ]
}
const skills = {
    title: "My Skills",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    item: [
        {
            icon: <FaHtml5 />,
            name: "html5"
        },
        {
            icon: <FaCss3 />,
            name: "Css3"
        },
        {
            icon: <FaJs />,
            name: "Js"
        },
        {
            icon: <FaNodeJs />,
            name: "NodeJs"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css"
        },
        {
            icon: <FaPhp />,
            name: "Php"
        },
        {
            icon: <FaLaravel />,
            name: "Laravel"
        }
    ]
}
const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className='min-h-[80vh] flex justify-center items-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About me</TabsTrigger>
                    </TabsList>
                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value='experience' className='w-full '>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                                        {experience.item.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value='education' className='w-full '>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                                        {education.item.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>




                        <TabsContent value='skills' className='w-full h-full'>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className='text-3xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.item.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex flex-1 justify-center items-center group'>
                                                            <div className='text-5xl group-hover:text-accent transition-all duration-300'>
                                                                {skill.icon}

                                                            </div>
                                                            
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>

                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>


                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-3xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {about.description}
                                </p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-md'>{item.fieldValue}</span>
                                            </li>

                                        )
                                    })}
                                </ul>
                            </div>

                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume