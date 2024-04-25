import React,{Suspense} from "react";
import ReactDOM from "react-dom/client";

 // 导入两个核心组件
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";

// 创建路由对象
import router from "./router";
// 使用RouterProvider 加载路由对象
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router}>
      </RouterProvider>
      </Suspense>
  </React.StrictMode>
);