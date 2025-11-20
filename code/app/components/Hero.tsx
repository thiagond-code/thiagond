import { description, devName } from "../fonts"
import { ButtonConfig as ButtonInterface } from "../types"
import Button from "./utils/button"

interface ButtonConfig extends ButtonInterface {
    label: string
}

const heroButtons: ButtonConfig[] = [
    {
        label: 'Veja meus Projetos',
        link: '/projects',
        type: 'cta'
    },
    {
        label: 'Bater um Papo',
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
        <div className='flex flex-col gap-6'>
            <span className='hidden lg:block lg:text-7xl'>👋</span>
            <h2 className={`${description.className} text-md font-medium`}>
                Seja bem-vindo! Eu sou
            </h2>
            <h1 className={`${devName.className} text-4xl font-bold tracking-wide`}>Thiago Nogueira</h1>
            <p className={`${description.className} text-lg`}>Um estudante de Ciências da Computação com visão de futuro</p>
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