import { description, devName } from "../fonts"
import { ButtonConfig as ButtonInterface } from "../types"
import Button from "./utils/button"
import SocialMedia from "./utils/socialMedia"

interface ButtonConfig extends ButtonInterface {
    label: string
}

const heroButtons: ButtonConfig[] = [
    {
        label: 'See my Work',
        link: '/projects',
        type: 'cta'
    },
    {
        label: "Let's Talk!",
        link: '/contact',
        type: 'sec'
    },
]

const heroButtonItems = heroButtons.map((button) => {
    return (
        <li key={button.label}>
            <Button link={button.link} type={button.type}>{button.label}</Button>
        </li>
    )
})

const IntroDev = () => {
    return (
        <div className='flex flex-col gap-4'>
            <SocialMedia position='flex-start' />
            <h2 className={`${description.className} font-medium text-2xl sm:text-3xl py-2`}>
                Welcome! I am
            </h2>
            <h1 className={`${devName.className} text-4xl sm:text-6xl font-bold tracking-wide`}>Thiago Nogueira</h1>
            <p className={`${description.className} text-xl sm:text-xl`}>CS Undergrad | Full-Stack Engineer</p>
            <p className={`${description.className} text-lg sm:text-lg py-2`}>Building sustainable and future-proof production apps</p>
        </div>
    )
}

const ListButtons = () => {
    return (
        <div>
            <ul className='flex flex-col gap-2 md:flex-row'>
                {heroButtonItems}
            </ul>
        </div>
    )
}

function Hero({ children }: Readonly<{ children: React.ReactNode }>) {
    return <div className='flex flex-col gap-6'>{children}</div>
}

Hero.IntroDev = IntroDev
Hero.ListButtons = ListButtons

export default Hero