import { useEffect, useState } from "react";
import { IMYSelect } from "./IMySelect";
import styles from "./select.module.scss";

const MySelect: React.FC<IMYSelect> = ({ colors, getColor = f => f }) => {
  const [selectValue, setSelectValue] = useState<string>(
    colors.length ? colors[0].color : ""
  );

  useEffect(() => {
    if (colors.length) {
      setSelectValue(colors[0].color);
      getColor(colors[0].color);
    }
  }, [colors]);

  const sendColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newColor = e.target.value;
    console.log(newColor);
    setSelectValue(newColor);
    getColor(newColor);
  };

  return colors.length ? (
    <select
      className={styles.select}
      style={{ backgroundColor: selectValue }}
      value={selectValue}
      onChange={sendColor}
    >
      {colors.map(color => (
        <option
          style={{ backgroundColor: color.color, border: "none" }}
          value={color.color}
          key={color.color}
        ></option>
      ))}
    </select>
  ) : (
    <div>no filters</div>
  );
};

export default MySelect;
