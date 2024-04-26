

import { Outlet,NavLink } from "react-router-dom"
const App = () => {
    return (
        <div>
          <p>根组件</p>
          <div style={{gap:'10px',display:'flex'}}>
          <NavLink to={"/class"} className={({isActive})=>isActive?'nav-active':''}>Class类组件</NavLink>
          <NavLink to={"/useEffectTemplate"} className={({isActive})=>isActive?'nav-active':''}>UseEffectTemplate</NavLink>
          <NavLink to={"/loader/2"} className={({isActive})=>isActive?'nav-active':''}>Loader</NavLink>
          <NavLink to={"/level"} className={({isActive})=>isActive?'nav-active':''}>Level</NavLink>
          </div>
        
        <Outlet></Outlet>
      </div>
    )
}

export default App