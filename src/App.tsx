import { NavLink } from "react-router-dom";
import { Routes, Route, } from 'react-router-dom'
import {lazy} from 'react'
import { Suspense } from "react";
// import ClassTemplate from "@/pages/Class";

const ClassTemplate =  lazy(() => import('@/pages/Class'));
import UseEffectTemplate from "@/pages/UseEffectTemplate";
function App() {
  const routes = [
    {
      name: "类组件",
      path: "/classTemplate",
      element: <ClassTemplate />,
    },
    {
      name: "useEffect使用",
      path: "/useEffectTemplate",
      element: <UseEffectTemplate />,
    }
  ]

  return (
    <div className="App">

      <nav>
        {routes.map((item, index) => {
          return <NavLink key={index} to={item.path} className={({ isActive }) => isActive ? "nav-active" : void 0}>{item.name}</NavLink>
        })}
      </nav>

      <Suspense>
      <Routes>
       
        <Route path="/classTemplate" element={<ClassTemplate />} />
        <Route path="/useEffectTemplate" element={<UseEffectTemplate />} />
      </Routes>
        </Suspense>
    </div>
  );
}

export default App