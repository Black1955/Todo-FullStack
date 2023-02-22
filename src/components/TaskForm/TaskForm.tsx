import React, { useState } from "react";
import MyInput from "../../ui/MyInput/MyInput";
import styles from "./taskForm.module.scss";
import { AiOutlineFieldTime } from "react-icons/ai";
import Modal from "../../ui/modal/Modal";
import MySelect from "../../ui/select/MySelect";
const TaskForm = () => {
  const [active, setActive] = useState(false);
  const [date, setDate] = useState({});
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const colors = [
    { color: "#fac608" },
    { color: "#3fd4f4" },
    { color: "#717082" },
  ];
  const onsubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onsubmit} className={styles.form}>
      <div style={{ alignItems: "center", display: "flex" }}>
        <MySelect getColor={setColor} colors={colors} />
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
