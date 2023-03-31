import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { LandingPage } from "../pages/landingPage/ladingpage";
import { Login } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";



const MainRoutes = () => {
  return (
	 <Routes>
		<Route path="/" element={<LandingPage />} />
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<RegisterPage />} />
		<Route path="/dashboard/:name" element={<DashboardPage/>} />
	 </Routes>
  );
};

export {MainRoutes}