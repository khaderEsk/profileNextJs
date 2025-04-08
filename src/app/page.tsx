
import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import State from "@/components/State"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full pb-10">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-3 xl:pb-19">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h2 className="h222 mb-6">Hello I&apos;m
              <br /> <span className="text-accent">Khader Eskander</span>
            </h2>
            <p className="max-2-[500px] mb-9 text-white/80">
              I hold the Information Technology Engineering Certificate for Software Engineering in 2024
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="default" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-8" iconStyles="w-9 h-9 border 
                border-accent rounded-full flex justify-center items-center text-accent
                text-base hover:bg-accent hover:text-primary
                hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <State />
      </div>
    </section>
  )
}

export default Home