import React, { useState } from "react";
import { IFilter } from "./IFilter";
import styles from "./Filter.module.scss";
const Filter = ({ color, text }: IFilter) => {
  const [checked, SetChecked] = useState<boolean>(false);
  return (
    <label
      className={styles.label}
      style={{
        //backgroundColor: checked ? "red" : "",
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
      <div className={styles.oleg} style={{ marginLeft: "15px" }}>
        {text}
      </div>
    </label>
  );
};

export default Filter;
