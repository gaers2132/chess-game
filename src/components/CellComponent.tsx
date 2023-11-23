import React, { FC } from "react";
import styles from "../app/page.module.css";
import { Cell } from "@/models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={`${styles.cell} ${styles[cell.color]} ${
        selected ? styles.selected : ""
      }`}
      onClick={() => click(cell)}
      style={{ background: cell.available && cell.figure ? "purple" : "" }}
    >
      {cell.available && !cell.figure && (
        <div className={styles.available}></div>
      )}
      {cell.figure?.logo && <img src={cell.figure.logo.src} alt="" />}
    </div>
  );
};

export default CellComponent;
