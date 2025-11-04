import { description, devName } from "../fonts"
import { ButtonConfig as ButtonInterface } from "../types"
import Button from "./utils/button"

interface ButtonConfig extends ButtonInterface {
    label: string
}

const heroButtons: ButtonConfig[] = [
    {
        label: 'View my projects',
        link: '/projects',
        type: 'cta'
    },
    {
        label: 'Contact me',
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
            <h2 className={`${description.className} text-xl font-medium`}>Hey, I&apos;m</h2>
            <h1 className={`${devName.className} text-4xl font-bold`}>Thiago Nogueira</h1>
            <p className={`${description.className}`}>CS Undergrad & Software Engineer Aspirant</p>
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
    return children
}

Hero.IntroDev = IntroDev
Hero.ListButtons = ListButtons

export default Hero