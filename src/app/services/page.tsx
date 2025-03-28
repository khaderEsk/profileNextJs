"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const Service = [
    {
        num: "01",
        title: "Web Development",
        description: "We provide the best web development services to our clients. Our team of experts will",
        href: ""
    },
    {
        num: "02",
        title: "backend Development",
        description: "We provide the best web development services to our clients. Our team of experts will",
        href: "http://"
    },
    {
        num: "03",
        title: "Frontend Development",
        description: "We provide the best web development services to our clients. Our team of experts will",
        href: ""
    },
    {
        num: "04",
        title: "SOE",
        description: "We provide the best web development services to our clients. Our team of experts will",
        href: ""
    },
]
const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container max-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 2.4,
                            ease: "easeIn"
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {Service.map((ser, index) => {
                        return (
                            <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div
                                        className="text-5xl font-extrabold text-outline text-transparent 
                                    group-hover:text-outline-hover transition-all duration-500"
                                    >
                                        {ser.num}
                                    </div>
                                    <Link href={ser.href} className="w-[55px] h-[55px] rounded-full bg-white group-hover:bg-accent
                                    transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{ser.title}</h2>
                                <p className="text-white/60">{ser.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

        </section>
    )
}

export default Services