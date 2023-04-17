import { useEffect, useState } from "react";
import styles from "./select.module.scss";
import { CustomSelectProps, Icolor } from "./IMySelect";
function MySelect({ options, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Icolor | null>(
    options.length ? options[0] : null
  );
  useEffect(() => {
    if (options.length > 0 && selectedOption === null) {
      setSelectedOption(options[0]);
      onChange(options[0].color);
    }
  }, [options]);
  useEffect(() => {
    if (options.length) {
      onChange(options[0].color);
    }
  }, []);
  function toggleSelect() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option: Icolor) {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.color);
  }

  return (
    <div className={styles.customSelect}>
      <div
        style={{
          backgroundColor:
            selectedOption !== null ? selectedOption.color : "#fff",
        }}
        className={styles.selectedOption}
        onClick={toggleSelect}
      ></div>
      <div className={styles.optionsContainer}>
        {isOpen && (
          <div className={styles.options}>
            {options.map(option => (
              <div
                key={option.color}
                style={{ backgroundColor: option.color }}
                className={styles.option}
                onClick={() => handleOptionClick(option)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MySelect;
