import React, { useState, useEffect } from "react";
import { IFilter } from "./IFilter";
import styles from "./Filter.module.scss";
const Filter = ({ color, text, getData }: IFilter) => {
  const [checked, SetChecked] = useState<boolean>(false);
  useEffect(() => {
    getData({ color, checked });
  }, [checked]);
  return (
    <label
      className={styles.label}
      style={{
        opacity: checked ? 1 : 0.5,
      }}
    >
      <input
        checked={checked}
        onChange={() => SetChecked(prev => !prev)}
        type='checkbox'
        className={styles.input}
        style={{ backgroundColor: color }}
      />
      <div style={{ marginLeft: "15px" }}>{text}</div>
    </label>
  );
};

export default Filter;
