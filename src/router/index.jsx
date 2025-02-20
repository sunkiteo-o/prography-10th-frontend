import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Funnel from "../pages/Funnel";
import DefaultLayout from "../layout/DefaultLayout";
import FunnelLayout from "../layout/FunnelLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/funnel",
    element: <FunnelLayout />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
