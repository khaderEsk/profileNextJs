"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+963)930 668 517"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "khader9es@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Damascus, syria"
    },
]

const Work = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex gap-[30px] flex-col xl:flex-row">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-3xl text-accent">Lets work together</h3>
                            <p className="text-white/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sed distinctio ullam natus labore sapiente.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstName" placeholder="First name" />
                                <Input type="lastName" placeholder="Last name" />
                                <Input type="email" placeholder="Email Address" />
                                <Input type="phone" placeholder="Phone number" />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue
                                        placeholder="Select a service"
                                    />
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select a service</SelectLabel>
                                            <SelectItem value="est"> web Development</SelectItem>
                                            <SelectItem value="cst"> Backend Development</SelectItem>
                                            <SelectItem value="mst"> Frontend Development</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </SelectTrigger>
                            </Select>
                            <Textarea className="h-[200px]" placeholder="Type your message here." />
                            <Button  className="max-w-40">Send message</Button>
                        </form>
                    </div>

                    <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index)=>{
                                return (
                                    <li key={index} className="flex items-start gap-6">
                                        <div className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[25px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work