
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import Class_template from "@/pages/Class";
import Loader from "@/pages/Loader";
import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
const UseEffectTemplate = lazy(() => import("@/pages/UseEffectTemplate"));
const router = createBrowserRouter([

  {
    path: "/",
    element: <Navigate to="/class" />,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/class",
        element: <Class_template></Class_template>,
      },
      {
        path: "/useEffectTemplate",
        element: <UseEffectTemplate></UseEffectTemplate>,
      },
      {
        path: "/loader",
        element: <Loader />,
        loader: async () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                name: 'loader',
                list: [1, 2, 3, 4, 5]
              })
            }, 2000)
          })
        }
      },
    ],

  },

]);

export default router