import { Figure } from "@/models/figures/Figure";
import React, { FC } from "react";
import styles from "../app/page.module.css";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className={styles.lost}>
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name}
          {figure.logo && <img width={20} height={20} src={figure.logo.src} />}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
