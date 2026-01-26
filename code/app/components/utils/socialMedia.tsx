import { faGithub as GitHub, faLinkedin as LinkedIn, faWhatsapp as WhatsApp } from "@fortawesome/free-brands-svg-icons"
import { SocialMediaIconsInterface } from "../../types/navigation"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"

const iconStyle = 'size-12 text-neutral-500 hover:text-neutral-700 transition-colors duration-600 ease-in-out delay-100'

const positionLayout = {
    'flex-start': 'flex justify-start items-start',
    'flex-center': 'flex justify-center items-center',
    'flex-end': 'flex justify-end items-end',
    'block': 'block',
}

const socialMediaIcons: SocialMediaIconsInterface[] = [
    {
        icon: <Icon icon={WhatsApp} className={`${iconStyle}`} />,
        link: 'https://wa.me/5533988112363?text=Ol%C3%A1%21%20Vi%20seu%20perfil%20e%20gostaria%20de%20conversar%20sobre%20oportunidades%20de%20est%C3%A1gio%20na%20%C3%A1rea%20de%20Tecnologia.%20Podemos%20conversar%3F'
    },
    {
        icon: <Icon icon={LinkedIn} className={`${iconStyle}`} />,
        link: 'https://linkedin.com/in/thiagond'
    },
    {
        icon: <Icon icon={GitHub} className={`${iconStyle}`} />,
        link: 'https://github.com/thiagond-code'
    },
]

const socialMediaIconItems = socialMediaIcons.map((socialMedia) => {
    return (
        <li key={socialMedia.link}>
            <a href={socialMedia.link} target="_blank" rel="noopener noreferrer">{socialMedia.icon}</a>
        </li>
    )
})

export default function SocialMedia({ position, style }: { position: keyof typeof positionLayout, style?: string }) {
    return <ul className={`${positionLayout[position]} ${style} gap-8`}>{socialMediaIconItems}</ul>
}