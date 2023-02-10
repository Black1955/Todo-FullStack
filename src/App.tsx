import React from "react";
import "./App.scss";
import ButtonRouter from "./ui/buttonRouter/ButtonRouter";
import { FiSettings } from "react-icons/fi";
import Filter from "./ui/filter/Filter";
import CheckBox from "./ui/ckeckbox/CheckBox";
import MyInput from "./ui/MyInput/MyInput";
import MyTask from "./ui/Task/MyTask";
function App() {
  return (
    <div className='App'>
      <MyTask color='#fac608' content='Read 5 pages of "spring"' time='8pm' />
      <MyTask color='#fac608' content='Read 5 pages of "spring"' time='8pm' />
    </div>
  );
}

export default App;
