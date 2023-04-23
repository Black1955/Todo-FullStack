import Tasks from "../../components/tasks/Tasks";
import { useAppSelector } from "../../hooks/useAppSelector/useAppSelector";
import { useGetAllTodoQuery } from "../../Services/todoSlice";

const SheduledTasks = () => {
  const { id } = useAppSelector(state => state.user);
  const { filters } = useAppSelector(state => state.filter);
  const TrueFilters = filters
    .filter(filter => filter.active === true)
    .map(filter => filter.color);
  const { data = [] } = useGetAllTodoQuery({
    userId: id,
    activeFilters: TrueFilters,
  });
  interface ObjectWithDateField {
    date: string;
    color: string;
    content: string;
    [key: string]: any;
  }
  function groupByDate(arr: ObjectWithDateField[]) {
    const grouped: { [key: string]: ObjectWithDateField[] } = {};
    arr.forEach(obj => {
      const date = obj.date;
      if (grouped[date]) {
        grouped[date].push(obj);
      } else {
        grouped[date] = [obj];
      }
    });
    return Object.values(grouped);
  }
  const tasks = groupByDate(data);
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {tasks.length !== 0 ? (
          tasks.map(tasks => {
            return (
              <Tasks date={tasks[0].date} tasks={tasks} key={tasks[0].date} />
            );
          })
        ) : (
          <div style={{ fontSize: "50px", color: "#fff", fontWeight: "bold" }}>
            you still haven`t had tasks
          </div>
        )}
      </div>
    </div>
  );
};

export default SheduledTasks;
