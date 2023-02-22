import React from "react";
import { useActions } from "../../hooks/useActions/useActions";
import MyTask from "../../ui/Task/MyTask";
import { ITasks } from "./ITasks";
import styles from "./tasks.module.scss";
const Tasks: React.FC<ITasks> = ({ date, tasks }) => {
  return (
    <div className={styles.tasks}>
      <div className={styles.date}>{date}</div>
      {tasks.map(task => (
        <MyTask
          color={task.color}
          content={task.content}
          time={task.time}
          key={task.id}
        />
      ))}
    </div>
  );
};

export default Tasks;
