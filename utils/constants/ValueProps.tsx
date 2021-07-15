import {
    SafetyCertificateTwoTone,
    HeartTwoTone,
    CheckCircleTwoTone,
    VideoCameraOutlined,
    StarOutlined,
    LikeOutlined
  } from "@ant-design/icons";
import { TValuePropItem } from "types";

export const CONNECT_VALUE_PROPS: TValuePropItem[] = [
    {
      icon: <CheckCircleTwoTone className="text-4xl" />,
      title: "Connect is for anybody, including educators and social services.",
      body: "Connect supplements in-person instruction by connecting students with on-campus resources, such as personalized tutoring, librarian access, disability support services, financial aid, and academic counseling.",
      cta: { text: "Get in touch", link: "" },
    },
    {
      icon: <HeartTwoTone className="text-4xl" />,
      title: "Connect is completely free for families.",
      body: "You can download Connect from the app store on any Apple or Android device. Once you create your profile, you can add your loved one and request to be added as their contact. Once corrections officials approve you as a visitor, you will then be able to schedule video calls.",
      cta: { text: "Sign the petition", link: "" },
    },
    {
      icon: <SafetyCertificateTwoTone className="text-4xl" />,
      title: "Connect meets corrections industry security standards.",
      body: "Use Connect on any device, including devices that your agency may already own.",
      cta: { text: "Request a demo", link: "" },
    },
  ];


  export const CORRECTIONS_VALUE_PROPS: TValuePropItem[] = [
    {
      icon: <VideoCameraOutlined className="text-4xl" />,
      title: "Modern techology solutions",
      body: "We can upgrade your facility to modern tech solutions that priortize the safety, security, and efficency you require",
      cta: { text: "Get in touch", link: "" },
    },
    {
      icon: <StarOutlined className="text-4xl" />,
      title: "Reduce recidivism",
      body: "Our products reduce recidvism by connecting people in prison to educational, legal, and emotional support for free",
      cta: { text: "Sign the petition", link: "" },
    },
    {
      icon: <LikeOutlined className="text-4xl" />,
      title: "Develop solutions together.",
      body: "Collaboration is essential to building a rehabilitative system. We work with partners to improve access to family contact and social services within their agency's requirements",
    },
  ];
