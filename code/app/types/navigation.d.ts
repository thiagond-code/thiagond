import { JSX } from "react"
import { ImageConfig as Brand, RoutesConfig } from "./index"

type LogoType =
  | {
      type: 'image'
      url: StaticImageData | string
      link: RoutesConfig
    }
  | {
      type: 'text'
      text: string
      link: RoutesConfig
    }
  | {
      type: 'both'
      text: string
      url: StaticImageData | string
      link: RoutesConfig
    }

interface SocialMediaIconsInterface {
    icon: JSX.Element
    link: string
}

export { SocialMediaIconsInterface, LogoType }