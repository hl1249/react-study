import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import Class_template from "@/pages/Class";
import Loader from "@/pages/Loader";
import App, { loader as AppLoader } from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import Level from "@/pages/Level";
import Level_1 from "@/pages/Level_1";
import Level_2 from "@/pages/Level_2";

import UseMemoPage from "@/pages/UseMemoPage";
import UseCallbackPage from "@/pages/UseCallbackPage";
import UseRefPage from "@/pages/UseRefPage";
import UseContextPage from "@/pages/UseContextPage";
import UseTransitionPage from "@/pages/UseTransitionPage";
import UseDeferredValuePage from "@/pages/UseDeferredValuePage";
// import UseEffectTemplate from "@/pages/UseEffectTemplate";
const UseEffectTemplate = lazy(() => import("@/pages/UseEffectTemplate"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/class" />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "class",
        element: <Class_template></Class_template>,
      },
      {
        path: "useEffectTemplate",
        element: <UseEffectTemplate></UseEffectTemplate>,
      },
      {
        path: "loader/:id",
        element: <Loader />,
        loader: AppLoader,
        // loader: async () => {
        //   return new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve({
        //         name: 'loader',
        //         list: [1, 2, 3, 4, 5]
        //       })
        //     }, 2000)
        //   })
        // }
      },
      {
        path: "level",
        element: <Level />,
        errorElement: <div>叼你妈嗨</div>,
        children: [
          {
            index: true,
            element: <Navigate to="level-1" />,
          },
          {
            path: "level-1",
            element: <Level_1 />,
          },
          {
            path: "level-2",
            element: <Level_2 />,
          },
        ],
      },
      {
        path: "useMemoPage",
        element: <UseMemoPage />,
      },
      {
        path: "useCallbackPage",
        element: <UseCallbackPage />,
      },
      {
        path: "useRefPage",
        element: <UseRefPage />,
      },
      {
        path: "useContextPage",
        element: <UseContextPage />,
      },
      {
        path: "useTransitionPage",
        element: <UseTransitionPage/>,
      },
      {
        path:"useDeferredValuePage",
        element: <UseDeferredValuePage />,
      }
    ],
  },
]);

export default router;
