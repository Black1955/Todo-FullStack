import React, { useState } from "react";
import { IMYSelect } from "./IMySelect";
import styles from "./select.module.scss";
const MySelect: React.FC<IMYSelect> = ({ colors, getColor = f => f }) => {
  const [selectValue, setSelectValue] = useState<string>(colors[0].color);

  const SendColor = (e: any) => {
    setSelectValue(e.target.value);
    getColor(selectValue);
  };

  return (
    <select
      className={styles.select}
      style={{ backgroundColor: selectValue }}
      value={selectValue}
      onChange={SendColor}
    >
      {colors.map(color => {
        return (
          <option
            style={{ backgroundColor: color.color, border: "none" }}
            value={color.color}
            key={color.color}
          ></option>
        );
      })}
    </select>
  );
};

export default MySelect;
