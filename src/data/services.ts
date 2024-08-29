import { ServiceType } from "@/components/elements/service-card";
import img3 from "@/assets/images/Lightning.svg";
import img2 from "@/assets/images/Code.svg";
import img1 from "@/assets/images/Palette.svg";

export const SERVICES: ServiceType[] = [
  {
    img: img1,
    title: "Web & mobile design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed tortor mi. Quisque eget lacinia magna.",
  },
  {
    img: img2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed tortor mi. Quisque eget lacinia magna. Vestibulum et ex mauris. Fusce maximus efficitur purus vel mattis. ",
    title: "Web application development",
  },
  {
    img: img3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed tortor mi. Quisque eget lacinia magna. Vestibulum et ex mauris. Fusce maximus efficitur purus vel mattis. Quisque eget lacinia magna. Vestibulum et ex mauris. Fusce maximus efficitur purus vel mattis.",
    title: "Optimization",
  },
];
