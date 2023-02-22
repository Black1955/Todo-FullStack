import "./App.scss";
import RegistrationForm from "./pages/registrForm/RegisterForm";
import SheduledTasks from "./pages/SheduledTasks/SheduledTasks";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TodayTasks from "./pages/TodayTasks/TodayTasks";
import app from "./http/ApiHtpp";
import { useEffect, useState } from "react";
function App() {
  const navigate = useNavigate();
  interface dat {
    id: string;
    tasks: any[];
  }
  const [data, setData] = useState({} as dat);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      app.post("/auth/token", { token }).then(res => setData(res.data));
    }
  }, []);
  if (!data) {
    return <Navigate to='/registration' />;
  }
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<TodayTasks />} />
          <Route path='sheduledTasks' element={<SheduledTasks />} />
        </Route>
        <Route path='/registration' element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default App;
