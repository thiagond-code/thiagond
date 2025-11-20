import { StaticImageData } from "next/image";

export type RoutesConfig = '/' | '/about' | '/projects' | '/contact'

export interface LinkConfig {
    label: string;
    link: string;
    icon?: string;
}

export interface ImageConfig {
    url: StaticImageData | string;
    captions: string;
    link?: RoutesConfig
}

export interface ButtonConfig {
    link: string;
    type?: 'cta' | 'sec';
}