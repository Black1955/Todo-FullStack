import React from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import Tasks from "../../components/tasks/Tasks";

const SheduledTasks = () => {
  const tasks = [
    { date: "2022-01-01", color: "", time: "", content: "" },
    { date: "2022-01-02", color: "", time: "", content: "" },
    { date: "2022-01-01", color: "", time: "", content: "" },
    { date: "2022-01-03", color: "", time: "", content: "" },
  ];

  interface ObjectWithDateField {
    date: string;
    color: string;
    time: string;
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
  const oleg = groupByDate(tasks);
  console.log(oleg);
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {oleg.map(tasks => {
          return <Tasks date={tasks[0].date} tasks={tasks} />;
        })}
      </div>
    </div>
  );
};

export default SheduledTasks;
