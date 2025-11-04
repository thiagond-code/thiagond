import type { Metadata } from "next"
import { MainSection } from "../components/utils/section"
import Hero from "../components/Hero"

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <>
      <MainSection style='flex flex-col gap-8 text-md pb-4'>
        <Hero>
          <Hero.IntroDev />
          <Hero.ListButtons />
        </Hero>
      </MainSection>
    </>
  )
}