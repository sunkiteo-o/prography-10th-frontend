import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Funnel from "../pages/Funnel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/funnel",
    element: <Funnel />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
