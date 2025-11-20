import Image from "next/image";
import Link from "next/link";
import { LinkConfig as NavItem } from "../../types";
import { LogoType } from "../../types/navigation";
import Logo from '../../public/Logo.png'

const links: NavItem[] = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'Sobre',
        link: '/about'
    },
    {
        label: 'Projetos',
        link: '/projects'
    },
    {
        label: 'Contato',
        link: '/contact'
    }
]

const brandConfig: LogoType = {
    link: '/',
    type: 'image',
    url: Logo
} as LogoType;

const renderBrand = brandConfig.type === 'image'
    ? (
    <Link href={brandConfig.link}>
        <Image src={brandConfig.url} className='size-15' alt='' />
    </Link>    
    )
    : (
        <h1>
            <Link href={brandConfig.link} className='font-bold text-lg'>{brandConfig.text}</Link>
        </h1>
    )

const renderLinks = links.map((navLink, id) => {
    return (
        <li key={id} className='px-4 text-gray-700 hover:text-blue-500 transition-colors duration-600 ease-in-out delay-100'>
            <Link href={navLink.link}>{navLink.label}</Link>
        </li>
    )
})

export { links, brandConfig, renderBrand, renderLinks }