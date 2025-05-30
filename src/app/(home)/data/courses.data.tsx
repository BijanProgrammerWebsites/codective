import { CourseType } from "@/app/(home)/types/course.type";

import ShahidRaisiPortrait from "@/assets/portraits/shahid-raisi.png";

import LogoImageComponent from "@/components/logo-image/logo-image.component";

import DsadLogo from "@/logo/dsad.logo";
import NextTransparentLogo from "@/logo/next-transparent.logo";
import ReactLogo from "@/logo/react.logo";

export const upcomingCoursesData: CourseType[] = [
  {
    title: "بوت‌کمپ صلواتی شهید رئیسی",
    category: "shahid",
    logo: <LogoImageComponent src={ShahidRaisiPortrait.src} alt="شهید رئیسی" />,
    date: "شروع از خرداد 1404",
    link: "/shahid",
  },
];

export const ongoingCoursesData: CourseType[] = [];

export const completedCoursesData: CourseType[] = [
  {
    title: "ساختمان داده و طراحی الگوریتم",
    category: "dsad",
    logo: <DsadLogo />,
    date: "از 2 تا 12 فروردین 1404",
    link: "/dsad",
  },
  {
    title: "بوت‌کمپ React",
    category: "react",
    logo: <ReactLogo />,
    date: "از 7 بهمن تا 28 اسفند 1403",
    link: "/react",
  },
  {
    title: "بوت‌کمپ React",
    category: "react",
    logo: <ReactLogo />,
    date: "شروع از 9 دی 1403",
    link: "/react",
  },
  {
    title: "بوت‌کمپ Next.js",
    category: "next",
    logo: <NextTransparentLogo />,
    date: "شروع از 19 آذر 1403",
    link: "/nextjs",
  },
];
