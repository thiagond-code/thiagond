import Link from "next/link"
import { renderBrand, links } from "./utils/navigation"
import SocialMedia from "./utils/socialMedia"
import { Layout } from "./utils/layouts"

const year = new Date().getFullYear()

const footerLinkItems = links.map((footerLink) => {
    return (
        <li key={footerLink.label} className='hover:text-blue-500 transition-colors duration-600 ease-in-out delay-100'>
            <Link href={footerLink.link}>{footerLink.label}</Link>
        </li>
    )
})

const FooterNavLinks = () => {
    return (
        <div>
                <ul className='flex justify-center gap-8 space-y-4 sm:gap-12'>
                    {footerLinkItems}
                </ul>
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
        <footer className='flex flex-col gap-4 items-center'>
            <Layout style="gap-8">
                {renderBrand}
                <FooterNavLinks />
            </Layout>
            <section className='flex flex-col items-center gap-4 text-xs text-neutral-500'>
                <SocialMedia position="flex-center" />
                <Copyright />
                <TechStack />
            </section>
        </footer>
    )
}