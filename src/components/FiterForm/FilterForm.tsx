import React, { useState } from "react";
import styles from "./FilterForm.module.scss";
import { BsCheck2 } from "react-icons/bs";
import MySelect from "../../ui/select/MySelect";
import { useAppSelector } from "../../hooks/useAppSelector/useAppSelector";
import { useActions } from "../../hooks/useActions/useActions";
const FilterForm = () => {
  const { colors } = useAppSelector(state => state.filter);
  const { createFilter, deleteColor } = useActions();
  const [text, setText] = useState("");
  const [selectValue, setSelectValue] = useState<string>("");
  const getColor = (color: any) => {
    setSelectValue(color);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!text || !selectValue) {
      return;
    }
    createFilter({ color: selectValue, text: text, active: false });
    deleteColor({ color: selectValue });
    setText("");
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <MySelect options={colors} onChange={getColor} />
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        type='text'
        className={styles.input}
        placeholder='add filter'
      />
      {text ? (
        <button className={styles.button}>
          <BsCheck2 width='15px' height='15px' />
        </button>
      ) : (
        <div></div>
      )}
    </form>
  );
};

export default FilterForm;
