import type { Metadata } from "next"
import { MainSection } from "../components/utils/section"
import Hero from "../components/Hero"
import Image from "next/image"
import Thiago from '../public/thiago.webp'


export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <>
      <MainSection style='flex flex-col gap-8 text-md pb-4'>
        <Hero>
          <div className="grid md:grid-cols-2 gap-8 items-center md:gap-12">
            <Image src={Thiago} alt=''></Image>
            <div className='flex flex-col gap-8'>
              <Hero.IntroDev />
              <Hero.ListButtons />
            </div>
          </div>
        </Hero>
      </MainSection>
    </>
  )
}