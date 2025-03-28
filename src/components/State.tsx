"use client"
import Countup from "react-countup"


const states = [
    {
        num: 3,
        text: "Year or experience"
    },
    {
        num: 6,
        text: "Project Completed"
    },
    {
        num: 8,
        text: "Technologies master"
    },
    {
        num: 500,
        text: "Code commit"
    },
]
const State = () => {
    return (
        <section className="pt-4 bp-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {states.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-1 gap-4 items-center 
                            justify-center xl:justify-start">
                                <Countup
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-semibold"
                                />
                                <p
                                    className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}
                                    leading-snug text-white/80
                                    `}
                                >
                                    {item.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default State