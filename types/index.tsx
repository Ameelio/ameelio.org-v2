export interface TShowcaseItem {
    label: string;
    asset?: JSX.Element;
    link?: string;
}
export interface TMetricItem {
    metric: string;
    label: string;
}

export interface TTestimonialItem {
    imageSrc: StaticImageData | string;
    quote: string;
    author: string;
}

export interface TStepByStepItem {
    index: number;
    title: string;
    desc: string;
}