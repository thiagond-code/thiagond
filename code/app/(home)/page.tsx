import type { Metadata } from "next"
import Image from "next/image"
import Thiago from '../public/thiago.webp'
import Hero from "../components/Hero"
import { Layout } from "../components/utils/layouts"


export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <>
      <Layout cols={2}>
        <Image src={Thiago} alt="Thiago Nogueira's photo" className="h-full w-full object-cover" />
        <Hero>
          <Hero.IntroDev />
        </Hero>
      </Layout>
    </>
  )
}