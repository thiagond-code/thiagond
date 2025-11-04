import Link from 'next/link';
import { renderBrand, links } from './utils/navigation';
import HamburgerMenu from './utils/menu';

export const renderNavLinks = links.map((navLink) => {
    return (
        <li key={navLink.label} className='px-4 text-gray-700 hover:text-blue-500 transition-colors duration-600 ease-in-out delay-100 font-medium'>
            <Link href={navLink.link}>{navLink.label}</Link>
        </li>
    )
})

export default function Navbar() {
    return (
        <header>
            <nav className='flex justify-between items-center'>
                {renderBrand}
                <ul className='hidden md:flex'>
                    {renderNavLinks}
                </ul>
                <HamburgerMenu />
            </nav>
        </header>
    )
}