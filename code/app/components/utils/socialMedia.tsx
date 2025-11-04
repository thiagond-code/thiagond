import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { SocialMediaIconsInterface } from "../../types/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const iconStyle = 'size-12'

const socialMediaIcons: SocialMediaIconsInterface[] = [
    {
        icon: <FontAwesomeIcon icon={faLinkedin} className={`${iconStyle}`} />,
        link: 'https://linkedin.com/in/thiagond'
    },
    {
        icon: <FontAwesomeIcon icon={faGithub} className={`${iconStyle}`} />,
        link: 'https://github.com/thiagond-code'
    }
]

const socialMediaIconItems = socialMediaIcons.map((socialMedia) => {
    return (
        <li key={socialMedia.link} className='hover:text-neutral-700 transition-colors duration-600 ease-in-out delay-100'>
            <a href={socialMedia.link} target="_blank" rel="noopener noreferrer">{socialMedia.icon}</a>
        </li>
    )
})

const SocialMedia = () => {
    return <ul className='flex justify-center gap-8'>{socialMediaIconItems}</ul>
}

export { SocialMedia }