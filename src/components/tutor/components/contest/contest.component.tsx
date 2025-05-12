import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import { ContestType } from "@/components/tutor/types/contest.type";

import FluentEmoji1stPlaceMedal from "@/icons/FluentEmoji1stPlaceMedal";
import FluentEmoji2ndPlaceMedal from "@/icons/FluentEmoji2ndPlaceMedal";

import styles from "./contest.module.css";

type Props = {
  contest: ContestType;
};

export default function ContestComponent({ contest }: Props): ReactElement {
  return (
    <li className={styles.contest}>
      <div className={styles.company}>
        <Image src={contest.companyImage} alt="" loading="eager" />
      </div>
      <div className={styles.title}>{contest.title}</div>
      <div className={styles.rank}>
        رتبه
        {` `}
        {contest.rank}
        {` `}
        {contest.rank === 1 ? (
          <FluentEmoji1stPlaceMedal />
        ) : (
          <FluentEmoji2ndPlaceMedal />
        )}
      </div>
      <Link
        className={clsx(styles.link, "button primary")}
        href={contest.link}
        target="_blank"
      >
        جدول امتیازات
      </Link>
    </li>
  );
}
