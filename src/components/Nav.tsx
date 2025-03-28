"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
]
const Nav = () => {
    const pathName = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((links, index) => {
                return <Link href={links.path} key={index} className={`${links.path === pathName &&
                    "text-accent border-b-2 border-accent"}
                    capitalize text-xl hover:text-accent transition-all`}>
                    {links.name}
                </Link>
            })}
        </nav>
    )
}

export default Nav