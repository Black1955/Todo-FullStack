import React from "react";
import MyTask from "../../ui/Task/MyTask";
import { ITasks } from "./ITasks";
import styles from "./tasks.module.scss";
const Tasks: React.FC<ITasks> = ({ date, tasks }) => {
  const formatDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className={styles.tasks}>
      <div className={styles.date}>{formatDate}</div>
      {tasks.map(task => (
        <MyTask
          color={task.color}
          content={task.content}
          date={task.date}
          key={task.id}
        />
      ))}
    </div>
  );
};

export default Tasks;
