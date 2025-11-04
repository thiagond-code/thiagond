import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { renderBrand, links } from "./utils/navigation"
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { SocialMedia } from "./utils/socialMedia"

const year = new Date().getFullYear()

const footerLinkItems = links.map((footerLink) => {
    return (
        <li key={footerLink.label} className='px-4 text-gray-700 hover:text-blue-500 transition-colors duration-600 ease-in-out delay-100'>
            <Link href={footerLink.link}>{footerLink.label}</Link>
        </li>
    )
})

const InfoDetails = () => {
    return (
        <div className='flex flex-col gap-4'>
            <span className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faEnvelope} className='size-6' />
                <p className='hover:text-blue-400 transition delay-100 duration-600'>
                    <a href='mailto:thiagond360@gmail.com' className='flex items-center gap-2'>
                        thiagond360@gmail.com
                        <FontAwesomeIcon icon={faArrowRight} className='size-4' />
                    </a>
                </p>
            </span>
            <span className='flex items-center gap-2 pb-4'>
                <FontAwesomeIcon icon={faMap} className='size-6' />
                <p>
                    Governador Valadares, MG (BR)
                </p>
            </span>
            <span className='flex flex-col gap-4'>
                <h1 className='font-medium'>Languages</h1>
                <p>🇧🇷 BR | 🇺🇸 US | 🇪🇸 ES</p>
            </span>
        </div>
    )
}

const FooterNavLinks = () => {
    return (
        <div>
            <div className='flex flex-col pb-4'>
                <h1 className='font-medium pb-4 hidden sm:block'>Navigation</h1>
                <ul className='flex sm:block justify-center'>
                    {footerLinkItems}
                </ul>
            </div>
        </div>
    )
}

const Copyright = () => {
    return <p className='text-sm'>&copy; {year} Thiago Nogueira. All rights reserved.</p>
}

const TechStack = () => {
    return <p>Built with Next.js + TypeScript</p>
}

export default function Footer() {
    return (
        <footer className='flex flex-col gap-4'>
            <section className='flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                    {renderBrand}
                    <InfoDetails />
                </div>
                <FooterNavLinks />
            </section>
            <section>
                <div className='flex flex-col justify-center text-center text-xs gap-4 text-neutral-500'>
                    <SocialMedia />
                    <Copyright />
                    <TechStack />
                </div>
            </section>
        </footer>
    )
}