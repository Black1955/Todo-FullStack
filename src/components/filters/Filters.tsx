import React from "react";
import Filter from "../../ui/filter/Filter";
import { useAppSelector } from "../../hooks/useAppSelector/useAppSelector";
const Filters = () => {
  const { filters } = useAppSelector(state => state.filter);
  if (!filters.length) {
    return <div>there aren`t filters</div>;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {filters.map(filter => (
        <Filter color={filter.color} text={filter.text} key={filter.color} />
      ))}
    </div>
  );
};

export default Filters;
