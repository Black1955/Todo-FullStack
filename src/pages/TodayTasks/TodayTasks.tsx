import TaskForm from "../../components/TaskForm/TaskForm";
import { useAppSelector } from "../../hooks/useAppSelector/useAppSelector";
import MyTask from "../../ui/Task/MyTask";
import styles from "./todayTasks.module.scss";
import { useGetAllTodoQuery } from "../../Services/todoSlice";
import { useRef } from "react";
import "overlayscrollbars/overlayscrollbars.css";
import useScroll from "../../hooks/useScroll/useScroll";
const TodayTasks = () => {
  const currDate = new Date(Date.now()).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const { id } = useAppSelector(state => state.user);

  const { data } = useGetAllTodoQuery(id, {
    selectFromResult: ({ data }) => ({
      data: data?.filter(
        item =>
          new Date(item.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }) === currDate
      ),
    }),
  });

  const hasScroll = data === undefined ? false : data.length < 4 ? false : true;
  const todoWrapper = useRef(null);
  useScroll(todoWrapper, hasScroll);
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
        <div ref={todoWrapper} style={{ height: hasScroll ? "400px" : "auto" }}>
          {data?.length === 0 ? (
            <h1>No tasks for today</h1>
          ) : (
            data?.map(task => {
              return (
                <MyTask
                  color={task.color}
                  content={task.content}
                  date={task.date}
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
