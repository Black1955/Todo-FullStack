import React, { useState } from "react";
import "./modal.scss";

interface IModal {
  active: boolean;
  setActive: (arg: boolean) => void;
  getData: (arg: string) => void;
}

const Modal = ({ active, setActive, getData = f => f }: IModal) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!time || !date) {
      return;
    }
    const data = date + " " + time;
    getData(data);
    setActive(false);
  };

  const handleTimeChange = (event: any) => {
    setTime(event.target.value);
  };

  const handleDateChange = (event: any) => {
    setDate(event.target.value);
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const todayString = `${year}-${month}-${day}`;

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <label>
            Time:
            <input type='time' value={time} onChange={handleTimeChange} />
          </label>
          <label>
            Date:
            <input
              type='date'
              value={date}
              min={todayString}
              onChange={handleDateChange}
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
