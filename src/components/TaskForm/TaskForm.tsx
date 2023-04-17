import React, { useState, useEffect } from "react";
import MyInput from "../../ui/MyInput/MyInput";
import styles from "./taskForm.module.scss";
import { AiOutlineFieldTime } from "react-icons/ai";
import Modal from "../../ui/modal/Modal";
import MySelect from "../../ui/select/MySelect";
import { useCreateTodoMutation } from "../../Services/todoSlice";
import { useAppSelector } from "../../hooks/useAppSelector/useAppSelector";
const TaskForm = () => {
  const [createTodo] = useCreateTodoMutation();
  const [active, setActive] = useState(false);
  const [date, setDate] = useState("");
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const { filters } = useAppSelector(state => state.filter);
  const colors = filters.length
    ? filters.map(filter => {
        return { color: filter.color };
      })
    : [];
  const onsubmit = (e: any) => {
    e.preventDefault();
    if (!date || !color || !text) {
      return;
    }
    createTodo({ color, date, content: text });
    setDate("");
    setColor("");
    setText("");
  };
  useEffect(() => {
    console.log(color);
  }, [color]);
  return (
    <form onSubmit={onsubmit} className={styles.form}>
      <div style={{ alignItems: "center", display: "flex" }}>
        <MySelect onChange={setColor} options={colors} />
        <MyInput
          placeholder='What is your next task?'
          id={5}
          getData={setText}
        />
      </div>
      <div style={{ alignItems: "center", display: "flex", height: "30px" }}>
        <AiOutlineFieldTime
          size='30px'
          color=''
          style={{ cursor: "pointer" }}
          onClick={() => setActive(true)}
        />
        {!date || !color || !text ? (
          ""
        ) : (
          <button className={styles.button}>accept</button>
        )}
      </div>
      <Modal active={active} setActive={setActive} getData={setDate} />
    </form>
  );
};

export default TaskForm;
