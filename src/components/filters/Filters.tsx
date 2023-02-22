import React from "react";
import Filter from "../../ui/filter/Filter";
import colors from "../../assets/_variables.module.scss";
const filters: any[] = [
  { color: colors.MyPink, text: "Personal", id: Date.now() },
  { color: colors.MyLightBlue, text: "Freelance", id: Date.now() + 1 },
  { color: colors.MyYellow, text: "work", id: Date.now() + 2 },
];

const Filters = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {filters.map(filter => (
        <Filter color={filter.color} text={filter.text} key={filter.id} />
      ))}
    </div>
  );
};

export default Filters;
