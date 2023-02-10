import React, { useState } from "react";
import { ICheckBox } from "./ICheckBox";
import styles from "./CheckBox.module.scss";
const CheckBox: React.FC<ICheckBox> = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <input
      type='checkbox'
      className={styles.CheckBox}
      style={{ opacity: isChecked ? 1 : 0.5 }}
      checked={isChecked}
      onChange={() => setIsChecked(prev => !prev)}
    />
  );
};

export default CheckBox;
