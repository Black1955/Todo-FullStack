import React, { useState } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import TaskForm from "../../components/TaskForm/TaskForm";
import { IMyTask } from "../../ui/Task/IMyTask";
import MyTask from "../../ui/Task/MyTask";
import styles from "./todayTasks.module.scss";
const TodayTasks = () => {
  const [tasks, setTasks] = useState<IMyTask[]>([
    { color: "#fd99af", content: "Work out", time: "8:00 am", id: 1 },
    {
      color: "#fac608",
      content: "Design team meeting",
      time: "2:30 pm",
      id: 2,
    },
    {
      color: "#3fd4f4",
      content: "Hang off the project",
      time: "7:00 pm",
      id: 3,
    },
    {
      color: "#fd99af",
      content: 'Read 5 pages of "spring"',
      time: "10:30 pm",
      id: 4,
    },
  ]);
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div className={styles.content}>
        <h1 style={{ marginBottom: "60px", color: "#fff" }}>
          Today main focus <br /> <span>Desing team meeting</span>
        </h1>
        <TaskForm />
        <div>
          {tasks.length === 0 ? (
            <h1>No tasks for today</h1>
          ) : (
            tasks.map(task => {
              return (
                <MyTask
                  color={task.color}
                  content={task.content}
                  time={task.time}
                  key={task.id}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TodayTasks;
