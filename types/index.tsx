export interface ShowcaseItem {
    label: string;
    asset?: JSX.Element;
    link?: string;
}
export interface MetricItem {
    metric: string;
    label: string;
}

export interface TestimonialItem {
    imageSrc: StaticImageData | string;
    quote: string;
    author: string;
}