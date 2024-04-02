import { useState } from "react";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import Contact from "./pages/Contact";
import Loading from "./components/Loading";
import FindDoctor from "./pages/FindDoctor";
import About from "./pages/About";
import RootLayout from "./components/RootLayout";
import OTPVerify from "./pages/OTPVerify";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectRoutes from "./components/ProtectRoutes";
import Profile from "./pages/Profile";
import PublicRoutes from "./components/PublicRoutes";
import ApplyDoctor from "./pages/ApplyDoctor";
import DashboardLayout from "./components/DashboardLayout";
const user = JSON.parse(localStorage.getItem("user")) || [];
console.log(user.username);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />} >
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="find-doctor" element={<FindDoctor />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={ <ProtectRoutes><Profile /></ProtectRoutes> } />
          <Route path="apply-doctor" element={<ApplyDoctor />} />
          
        </Route>
      </Route>
      <Route path="signin" element={
        <PublicRoutes>
          <SingIn />
        </PublicRoutes>
      } />
      <Route path="signup" element={
        <PublicRoutes>
          <SingUp />
        </PublicRoutes>
      } />
      <Route path="forgot-password" element={
        <PublicRoutes>
          <ForgotPassword />
        </PublicRoutes>
      } />
      <Route path="otpverify" element={
        <ProtectRoutes>
          <OTPVerify />
        </ProtectRoutes>
      } />

    </>

  )
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    isLoading ? <Loading /> : <RouterProvider router={router} />
    // <RouterProvider router={router} />
  )
}

export default App
