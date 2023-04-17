import TaskForm from "../../components/TaskForm/TaskForm";
import { useAppSelector } from "../../hooks/useAppSelector/useAppSelector";
import MyTask from "../../ui/Task/MyTask";
import styles from "./todayTasks.module.scss";
import { useGetAllTodoQuery } from "../../Services/todoSlice";
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

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div className={styles.content}>
        <h1 className={styles.header}>
          Today main focus <br /> <span>Desing team meeting</span>
        </h1>
        <TaskForm />
        <div>
          {data?.length === 0 ? (
            <h1 className={styles.noTasks}>No tasks for today</h1>
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
