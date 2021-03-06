import React from "react";

// Media
import Bloomberg from "assets/Media/Bloomberg";
import Forbes from "assets/Media/Forbes";
import TechCrunch from "assets/Media/TechCrunch";
import BusinessInsider from "assets/Media/BusinessInsider";
import Wapo from "assets/Media/Wapo";
import FastCompany from "assets/Media/FastCompany";
import { TShowcaseItem } from "types";
import Showcase, { ShowCaseProps } from "../Showcase";
import PaddedLayout from "components/Layout/PaddedLayout";

const MEDIA: TShowcaseItem[] = [
  {
    asset: <Bloomberg />,
    link: "https://www.bloomberg.com/news/articles/2021-09-08/nonprofit-aims-to-disrupt-pricey-prison-telecom-industry?sref=Y5NzbMHF",
    label: "Bloomberg",
  },
  {
    asset: <Forbes />,
    link: "https://www.forbes.com/sites/angelauyeung/2020/09/21/the-prison-communications-nonprofit-backed-by-twitters-jack-dorsey-and-former-google-chief-eric-schmidt/#139203bc3b92",
    label: "Forbes",
  },
  {
    asset: <Wapo />,
    link: "https://www.washingtonpost.com/opinions/2020/03/20/coronavirus-is-upending-society-here-are-ideas-mitigate-its-impact/?arc404=true#Orchingwa-Saruhashi-Schull",
    label: "Washington Post",
  },
  {
    asset: <TechCrunch />,
    link: "https://techcrunch.com/2020/05/14/ameelio-wants-to-take-on-for-profit-prison-calling-rackets-after-starting-with-free-letters-to-inmates/",
    label: "TechCrunch",
  },
  {
    asset: <BusinessInsider />,
    link: "https://www.businessinsider.com/startup-ameelio-communicate-loved-ones-incarcerated-yale-2020-6",
    label: "Business Insider",
  },
  {
    asset: <FastCompany />,
    link: "https://www.fastcompany.com/90608032/this-app-is-making-it-free-for-incarcerated-people-to-make-video-calls",
    label: "Fast Company",
  },
];

interface Props extends Omit<ShowCaseProps, 'items'> {
  className?: string;
}
const MediaShowcase = ({ className, ...props }: Props) => {
  return (
    <div className={className}>

      <PaddedLayout>
        <Showcase items={MEDIA} {...props} />
      </PaddedLayout>
    </div>

  );
};

export default MediaShowcase;
