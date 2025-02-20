import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Funnel from "../pages/Funnel";
import DefaultLayout from "../layout/DefaultLayout";
import FunnelLayout from "../layout/FunnelLayout";
import ApplylPage from "../pages/ApplyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/funnel",
    element: <ApplylPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
