import React from "react";
import CheckBox from "../ckeckbox/CheckBox";
import { IMyTask } from "./IMyTask";
import styles from "./MyTask.module.scss";
const MyTask: React.FC<IMyTask> = ({ color, content, time }) => {
  return (
    <div className={styles.task}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles.color} style={{ backgroundColor: color }}></div>
        <div className={styles.content}>{content}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles.time}>{time}</div>
        <CheckBox />
      </div>
    </div>
  );
};

export default MyTask;
