import { Layout } from "antd";
import CorrectionsHero from "./CorrectionsHero";
import React from "react";
import Testimonial from "components/Testimonial";
import StepByStep from "components/Product/StepByStep";
import { MIKE } from "utils/constants/Testimonials";
import MediaShowcase from "components/Showcase/MediaShowcase";
import FundersShowcase from "components/Showcase/FundersShowcase";
import PaddedLayout from "components/Layout/PaddedLayout";
import ProductCard from "components/Cards/ProductCard/ProductCard";
import Image from "next/image";
import LettersTracking from "assets/Mockups/Letters/LettersTracking.png";
import { LINKS } from "utils/constants";
import DenverVideoCard from "components/Cards/DenverVideoCard";
interface Props {}

const Corrections = (props: Props) => {
  return (
    <Layout.Content>
      <CorrectionsHero />
      <PaddedLayout>
        <DenverVideoCard />
      </PaddedLayout>
      <Testimonial {...MIKE} />

      <PaddedLayout className="flex flex-col gap-y-8">
        <ProductCard
          type="connect"
          desc="Support free video calls for family meetings and programming, while fully integrating your video and in-person visitation systems"
          cta={{ text: "Request a Demo", link: LINKS.CONNECT_DEMO }}
          image={
            <div style={{ width: 245, height: 185 }}>
              <Image
                src="/static/images/MikeUsingConnect.png"
                alt="Correctional staff using Connect"
                width="245"
                height="185"
              />
            </div>
          }
        />
        <ProductCard
          type="letters"
          desc="Guarantee tamper-proof mail by approving our contactless printing and shipping solution"
          cta={{ text: "Get in Touch", link: LINKS.GET_IN_TOUCH }}
          image={
            <div style={{ width: 240, height: 300 }}>
              <Image
                src={LettersTracking}
                alt="Correctional staff using Connect"
              />
            </div>
          }
        />
      </PaddedLayout>
      <StepByStep />
      <MediaShowcase
        title="Ameelio in the Press"
        titleClassName="text-white opacity-50"
        className="bg-blue-700"
      />
      <FundersShowcase />
    </Layout.Content>
  );
};

export default Corrections;
