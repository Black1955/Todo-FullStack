import "./App.scss";
import RegistrationForm from "./pages/registrForm/RegisterForm";
import SheduledTasks from "./pages/SheduledTasks/SheduledTasks";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TodayTasks from "./pages/TodayTasks/TodayTasks";
import LoginForm from "./pages/Login/LoginForm";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<TodayTasks />} />
          <Route path='sheduledTasks' element={<SheduledTasks />} />
        </Route>
        <Route path='/registration' element={<RegistrationForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
