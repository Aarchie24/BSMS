import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
// import Home from "../pages/Home";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import AdminLogin from "../components/auth/AdminLogin";
import AdminDashboard from "../pages/shpkpr/Dashboard";
import Dashboard from "../pages/shpkpr/Dashboard";
import Inventory from "../pages/shpkpr/Inventory";
import Orders from "../pages/shpkpr/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <div className="p-4">Home</div> }
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/admin-login",
    element: <AdminLogin />
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />
  },
  // {
  //   path: "/inventory",
  //   element: <Inventory />
  // },
  // {
  //   path: "/orders",
  //   element: <Orders />
  // }
]);

export default router;