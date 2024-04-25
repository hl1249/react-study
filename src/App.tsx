

import { Outlet,NavLink } from "react-router-dom"
const App = () => {
    return (
        <div>
          <p>根组件</p>
          <div style={{gap:'10px',display:'flex'}}>
          <NavLink to={"/class"}>Class类组件</NavLink>
          <NavLink to={"/useEffectTemplate"}>UseEffectTemplate</NavLink>
          <NavLink to={"/loader/2"}>Loader</NavLink>
          <NavLink to={"/level"}>Level</NavLink>
          </div>
        
        <Outlet></Outlet>
      </div>
    )
}

export default App