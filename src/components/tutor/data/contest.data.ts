import digikalaImage from "@/assets/companies/digikala.png";
import mciImage from "@/assets/companies/mci.svg";
import queraImage from "@/assets/companies/quera.svg";
import snappImage from "@/assets/companies/snapp.svg";
import systemgroupImage from "@/assets/companies/systemgroup.svg";

import { ContestType } from "@/components/tutor/types/contest.type";

export const goldContests: ContestType[] = [
  {
    companyImage: digikalaImage,
    title: "دیجی‌کالا کاپ",
    rank: 1,
    link: "https://quera.org/contest/assignments/33751/scoreboard/",
  },
  {
    companyImage: mciImage,
    title: "همراه کاپ",
    rank: 1,
    link: "https://quera.org/contest/assignments/25979/scoreboard/",
  },
  {
    companyImage: queraImage,
    title: "CodeCup 6",
    rank: 1,
    link: "https://quera.org/contest/assignments/35057/scoreboard/",
  },
];

export const silverContests: ContestType[] = [
  {
    companyImage: snappImage,
    title: "Box Factory",
    rank: 2,
    link: "https://quera.org/contest/assignments/31890/scoreboard/",
  },
  {
    companyImage: systemgroupImage,
    title: "هم‌کد",
    rank: 2,
    link: "https://quera.org/contest/assignments/33749/scoreboard/",
  },
];
