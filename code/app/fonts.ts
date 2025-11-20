import { Fira_Code, Inter, Merriweather } from 'next/font/google'

const description = Fira_Code({
    subsets: ['latin']
})

const devName = Merriweather({
    subsets: ['latin'],
    weight: ['800']
})

const primaryFont = Inter({
    subsets: ['latin']
})

export { description, devName, primaryFont }