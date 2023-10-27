import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "../pages/private_routes_manager/PrivateRoute";
import Checkout from "../pages/Checkout";
import PrivateRouteAlt from "../pages/private_routes_manager/PrivateRouteAlt";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/services/:id',
        element: <ServiceDetails />
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>
      },
      {
        path: '/login',
        element: <PrivateRouteAlt><Login /></PrivateRouteAlt>
      },
      {
        path: '/sign-up',
        element: <PrivateRouteAlt><SignUp /></PrivateRouteAlt>
      }
    ]
  }
])