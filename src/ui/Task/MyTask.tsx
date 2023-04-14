import React from "react";
import CheckBox from "../ckeckbox/CheckBox";
import { IMyTask } from "./IMyTask";
import styles from "./MyTask.module.scss";
const MyTask: React.FC<IMyTask> = ({ color, content, date }) => {
  const formatDate = new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  return (
    <div className={styles.task}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles.color} style={{ backgroundColor: color }}></div>
        <div className={styles.content}>{content}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles.time}>{formatDate}</div>
        <CheckBox />
      </div>
    </div>
  );
};

export default MyTask;
