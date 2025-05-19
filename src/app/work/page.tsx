"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper"
import "swiper/css";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtn from "@/components/WorkSlideBtn";

const projects = [
    {
        num: "01",
        category: "Full Stack",
        title: "project 1",
        description: "Developed a Advertising promotion website was developed, Provides advertising display services through games on the site. Integrated an online booking system, allowing customers to withdraw profits from the site's games via electronic wallet. Designed a modern, mobile-friendly interface for a seamless user experience. Implemented SEO optimization, targeting Advertising promotion keywords to boost search engine rankings.",
        stack: [
            { name: "HTML5" },
            { name: "Css" },
            { name: "JavaScript" },
            { name: "php" },
            { name: "laravel" },
            { name: "MySql" },
        ],
        image: '/assets/work/game.png',
        live: "",
        github: "https://github.com/khaderEsk/games.git"
    }, {
        num: "02",
        category: "Full Stack",
        title: "project 2",
        description: "Developed a skin care website was developed, offering cosmetics display and purchase services. Integrated an online booking system, allowing customers to purchase through the website and pay via PayPal. Designed a modern, mobile-friendly interface for a seamless user experience. Implemented SEO optimization, targeting skin care-related keywords to boost search engine rankings.",
        stack: [
            { name: "HTML5" },
            { name: "Javascript" },
            { name: "bootstrap" },
            { name: "php" },
            { name: "laravel" },
            { name: "MySql" },
        ],
        image: '/assets/work/greenHarvest.png',
        live: "",
        github: "https://github.com/khaderEsk/GreenHaevest.git"
    }, {
        num: "03",
        category: "Backend",
        title: "project 3",
        description: "Developed a Educational application was developed, Provides Various educational services, including video calls and scheduling educational appointments and organizing study programs. Integrated an online booking system, allowing customers to withdraw profits from the site's games via electronic wallet. Designed a modern, mobile-friendly interface for a seamless user experience. Implemented SEO optimization, targeting Educational, organizing study programs keywords to boost search engine rankings.",
        stack: [
            { name: "Php" },
            { name: "Laravel" },
            { name: "MySQL" },
        ],
        image: '/assets/work/Project3.png',
        live: "",
        github: "https://github.com/khaderEsk/Educational1.git"
    },
]

const Work = () => {
    const [project, SetProject] = useState(projects[0]);
    const handleSlideChange = (swiper: SwiperType) => {
        const currentIndex = swiper.activeIndex;
        SetProject(projects[currentIndex])
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"> {project.category} Project</h2>
                            <p className="text-white/60"> {project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="h-[70px] w-[70px] rounded-full bg-white/5 flex items-center justify-center group">

                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                <TooltipContent>
                                                    <p>Live Project</p>
                                                </TooltipContent>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="h-[70px] w-[70px] rounded-full bg-white/5 flex items-center justify-center group">

                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                <TooltipContent>
                                                    <p>GitHub repository</p>
                                                </TooltipContent>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[560px] mb-12"
                            onSlideChange={handleSlideChange}
                        >

                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">

                                        <div className="h-[460px] group relative flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            <WorkSlideBtn
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_30px)] xl:bottom-3 z-20 w-full xl:w-max justify-between xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work