import React, { useEffect } from "react";
import Filter from "../../ui/filter/Filter";
import { useAppSelector } from "../../hooks/useAppSelector/useAppSelector";
import { useActions } from "../../hooks/useActions/useActions";
const Filters = () => {
  const { filters } = useAppSelector(state => state.filter);
  const { changeFilter } = useActions();
  const [filterState, SetFilterState] = React.useState<{
    color: string;
    checked: boolean;
  } | null>(null);
  useEffect(() => {
    changeFilter(filterState!);
  }, [filterState]);
  if (!filters.length) {
    return <div>there aren`t filters</div>;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {filters.map(filter => (
        <Filter
          color={filter.color}
          text={filter.text}
          getData={SetFilterState}
          key={filter.color}
        />
      ))}
    </div>
  );
};

export default Filters;
