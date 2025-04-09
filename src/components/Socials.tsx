import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter, FaGoogleDrive } from "react-icons/fa"

interface SocialsProps {
    containerStyles?: string
    iconStyles?: string
}

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/khaderEsk' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/khader-eskander-44a263303/' },
    { icon: <FaGoogleDrive />, path: 'https://drive.google.com/drive/folders/15_tZZiYrL-NSRxor6olNrq8mjnWwMgIB' },
    { icon: <FaTwitter />, path: '/' }
]

const Socials: React.FC<SocialsProps> = ({ containerStyles = "", iconStyles = "" }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link
                    key={index}
                    href={item.path}
                    className={iconStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
    )
}

export default Socials