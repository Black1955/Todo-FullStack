import React, { useState } from "react";
import { IMyInput } from "./IMyInput";
import styles from "./MyInput.module.scss";
const MyInput = ({ placeholder }: IMyInput) => {
  const [data, setData] = useState<string>("");
  return (
    <input
      type='text'
      placeholder={placeholder}
      value={data}
      onChange={e => setData(e.target.value)}
      className={styles.input}
    />
  );
};

export default MyInput;
