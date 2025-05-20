"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';
import { FaLaravel, FaHtml5, FaCss3, FaPhp, FaGithub, FaGitlab, FaJava, FaGit, FaDocker } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { MdDragIndicator, MdOutlineSettingsApplications } from "react-icons/md";

import { IoLogoJavascript } from 'react-icons/io';

import { SiTailwindcss, SiFastapi, SiMysql, SiPostgresql, SiPrisma, SiLaravel, SiJira } from 'react-icons/si';
import { DiScrum } from "react-icons/di";

const about = {
    title: "About Me",
    description: "",
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
            fieldValue: "https://github.com/khaderEsk",
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
    description: "With 3 years of experience in full-stack web development, I specialize in building responsive, scalable, and user-friendly web applications from concept to deployment. My expertise spans both front-end and back-end technologies, allowing me to deliver end-to-end solutions tailored to clients' needs",
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
    description: "I got my bachelor's degree in information engineering from Damascus University.",
    item: [
        {
            institution: "Damascus University",
            degree: "information technology engineering",
            duration: "2018-2024"
        },
        {
            institution: "Online Course platform",
            degree: "BackEnd Development",
            duration: "2021"
        },
        {
            institution: "Code Cademy",
            degree: "FrontEnd Track",
            duration: "2023"
        },
        {
            institution: "Online Course",
            degree: "Programming Course",
            duration: "2020 -2021"
        },
        {
            institution: "Organization Shaza Al-SHAM",
            degree: "Al-Amin Program",
            duration: "2024"
        }
    ]
}
const skills = {
    title: "My Skills",
    description: "Programming Languages:",
    item: [
        {
            icon: <IoLogoJavascript />,
            name: "JavaScript"
        },
        {
            icon: <FaPhp />,
            name: "Php"
        },
        {
            icon: <FaJava />,
            name: "Java"
        },
        {
            icon: <RiNextjsFill />,
            name: "Next.js"
        },

    ]
}

const skillsWeb = {
    description: "Web Development:",
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
            icon: <MdOutlineSettingsApplications />,
            name: "Rest Full API"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css"
        }
    ]
}

const skillsFrameworks = {
    description: "Frameworks & Tools:",
    item: [
        {
            icon: <FaLaravel />,
            name: "Laravel"
        },
        {
            icon: <RiNextjsFill />,
            name: "Next js"
        },
        {
            icon: <IoLogoFirebase />,
            name: "Firebase"
        },
        {
            icon: <SiFastapi />,
            name: "Fast API "
        }
    ]
}

const skillsDatabases = {
    description: "Databases & ORMs:",
    item: [
        {
            icon: <SiMysql />,
            name: "MySQL"
        },
        {
            icon: <SiPostgresql />,
            name: "PostgreSQL"
        },
        {
            icon: <SiPrisma />,
            name: "Prisma"
        },
        {
            icon: <SiLaravel />,
            name: "Eloquent"
        }
    ]
}

const skillsControl = {
    description: "Version Control & Deployment:",
    item: [
        {
            icon: <FaGit />,
            name: "Git "
        },
        {
            icon: <FaGitlab />,
            name: "Gitlab "
        },
        {
            icon: <FaGithub />,
            name: "Github "
        }
    ]
}

const skillsManagement = {
    description: "Project Management:",
    item: [
        {
            icon: <MdDragIndicator />,
            name: "Agile  "
        },
        {
            icon: <SiJira />,
            name: "Jira  "
        },
        {
            icon: <DiScrum />,
            name: "Scrum "
        }
    ]
}

const skillsDevOps = {
    description: "Project Management:",
    item: [
        {
            icon: <FaDocker />,
            name: "Docker "
        },
        {
            icon: <IoLogoVercel />,
            name: "Vercel  "
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
                        <TabsContent value='education' className='w-full'>
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

                            <div className="flex flex-col gap-[30px ] mt-10">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skillsWeb.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skillsWeb.item.map((skill, index) => {
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

                            <div className="flex flex-col gap-[30px ] mt-10">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skillsFrameworks.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skillsFrameworks.item.map((skill, index) => {
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

                            <div className="flex flex-col gap-[30px ] mt-10">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skillsDatabases.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skillsDatabases.item.map((skill, index) => {
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

                            <div className="flex flex-col gap-[30px ] mt-10">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skillsControl.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skillsControl.item.map((skill, index) => {
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

                            <div className="flex flex-col gap-[30px ] mt-10">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skillsManagement.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skillsManagement.item.map((skill, index) => {
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

                            <div className="flex flex-col gap-[30px ] mt-10 mb-10">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skillsDevOps.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skillsDevOps.item.map((skill, index) => {
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