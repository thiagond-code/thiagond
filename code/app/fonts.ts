import { Fira_Code, Source_Serif_4, Inter, Playfair_Display } from 'next/font/google'

const description = Fira_Code({
    subsets: ['latin']
})

const devName = Source_Serif_4({
    subsets: ['latin']
})

const primaryFont = Inter({
    subsets: ['latin']
})

const secondaryFont = Playfair_Display({
    subsets: ['latin']
})

export { description, devName, primaryFont, secondaryFont }