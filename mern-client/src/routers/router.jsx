// Create and render a browser router in main.jsx

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
 import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../component/About";
import LoginUser from "../component/ContactUs";
import SingleArt from "../shop/SingleArt";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadArt from "../dashboard/UploadArt";
import ManageArt from "../dashboard/ManageArt";
import EditArt from "../dashboard/EditArt";
import Signup from "../component/Signup";
import Login from "../component/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../component/Logout";
import ContactUs from "../component/ContactUs";
import WhyStrinja from "../component/WhyStrinja";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
            path: '/about',
            element: <About/>
        },{
            path: '/contact-us',
            element: <ContactUs/>
        },
        {
          path: '/art/:id',
          element: <SingleArt/>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_SERVER_URL}/art/${params.id}`)
        }
      ]
    },
    {
      path: '/admin/dashboard',
      element: <DashboardLayout/>,
      children: [{
        path: '/admin/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>
      },
      {
        path: '/admin/dashboard/upload',
        element: <UploadArt/>
      },
      {
        path: '/admin/dashboard/manage',
        element: <ManageArt/>
      },
      {
        path: '/admin/dashboard/edit-art/:id',
        element: <EditArt/>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_SERVER_URL}/art/${params.id}`)
      },
      ]
    },{
      path: "sign-up",
      element: <Signup/>
    },{
      path: "login",
      element:<Login/>
    },{
      path: "logout",
      element: <Logout/>
    },{
      path: "why-strinja",
      element: <WhyStrinja/>
    }
  ]);
  export default router;