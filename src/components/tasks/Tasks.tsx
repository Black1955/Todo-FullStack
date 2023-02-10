import React from "react";
import MyTask from "../../ui/Task/MyTask";
import { ITasks } from "./ITasks";

const Tasks: React.FC<ITasks> = ({ date, tasks }) => {
  return (
    <div>
      <div>{date}</div>
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
