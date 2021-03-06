export interface TShowcaseItem {
  label: string;
  asset?: JSX.Element;
  link?: string;
}
export interface TMetricItem {
  metric: string;
  label: string;
}

export interface TReviewItem {
  imageSrc: string;
  quote: string;
  author: string;
  date: string;
  link: string;
}

export interface TTestimonialItem {
  imageSrc: string;
  quote: string;
  author: string;
  occupation: string;
}

export interface TStepByStepItem {
  index: number;
  title: string;
  desc: string;
}

export interface TValuePropItem {
  icon: JSX.Element;
  title: string;
  body: string;
  cta?: TCallToAction;
}

type URL = `https://${string}`;
export type TCallToAction = {
  link: URL | 'petition';
  text: string;
};

export interface TTeamMember {
  imageSrc: string;
  name: string;
  title: string;
}

export interface TBoardMember extends TTeamMember {
  company: string;
}
