

import { Outlet, NavLink } from "react-router-dom"
const App = () => {
  console.log('App')
  // console.time()
  // const now_time = new Date().getTime()
  // while (new Date().getTime() - 2000 < now_time) {

  // }
  // console.timeEnd()
  return (
    <div>
      <p>根组件</p>
      <div style={{ gap: '10px', display: 'flex' }}>
        <NavLink to={"/class"}>Class类组件</NavLink>
        <NavLink to={"/useEffectTemplate"}>UseEffectTemplate</NavLink>
        <NavLink to={"/loader/2"}>Loader</NavLink>
        <NavLink to={"/level"}>Level</NavLink>
      </div>

      <Outlet></Outlet>
    </div>
  )
}


export const loader = () => {
  console.log("加载Loader 组件时调用")
  return null
}

export default App