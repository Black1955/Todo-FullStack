import { lazy } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
const SheduledTasks = lazy(() => import("./pages/SheduledTasks/SheduledTasks"));
const RegistrationForm = lazy(() => import("./pages/registrForm/RegisterForm"));
const TodayTasks = lazy(() => import("./pages/TodayTasks/TodayTasks"));
const LoginForm = lazy(() => import("./pages/Login/LoginForm"));

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
