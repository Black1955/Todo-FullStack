import React, { useState } from "react";
import styles from "./FilterForm.module.scss";
import { BsCheck2 } from "react-icons/bs";
import MySelect from "../../ui/select/MySelect";
const colors = [
  { color: "#fac608" },
  { color: "#3fd4f4" },
  { color: "#717082" },
];
const FilterForm = () => {
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState<string>("");

  const getColor = (color: any) => {
    setSelectValue(color);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    setValue("");
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <MySelect colors={colors} getColor={getColor} />
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type='text'
        className={styles.input}
        placeholder='Add filter'
      />
      {value ? (
        <button className={styles.button}>
          <BsCheck2 width='15px' height='15px' />
        </button>
      ) : (
        ""
      )}
    </form>
  );
};

export default FilterForm;
