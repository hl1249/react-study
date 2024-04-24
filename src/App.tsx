import { NavLink } from "react-router-dom";
import { Routes, Route, } from 'react-router-dom'
import { lazy } from 'react'
import { Suspense } from "react";
// import ClassTemplate from "@/pages/Class";

// PS：使用懒加载路由需要用 Suspense包裹<Route>
const ClassTemplate = lazy(() => import('@/pages/Class'));
import UseEffectTemplate from "@/pages/UseEffectTemplate";
function App() {
  const routes = [
    {
      name: "类组件",
      path: "/classTemplate",
    },
    {
      name: "useEffect使用",
      path: "/useEffectTemplate",
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
          {/* <Route path="/classTemplate" lazy={async () => {
            const module =  await import('@/pages/Class');
            const classTemplate = module.default;

            return {
              element:(
                <div>我测法</div>
              )
            }
          }}></Route> */}


          <Route path="/classTemplate" element={<ClassTemplate />} />
          <Route path="/useEffectTemplate" element={<UseEffectTemplate />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App