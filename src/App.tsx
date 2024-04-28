

import { Outlet, NavLink } from "react-router-dom"
const App = () => {
    return (
        <div>
          <p>根组件</p>
          <div style={{gap:'10px',display:'flex',flexWrap:'wrap'}}>
          <NavLink to={"/class"} className={({isActive})=>isActive?'nav-active':''}>Class类组件</NavLink>
          <NavLink to={"/useEffectTemplate"} className={({isActive})=>isActive?'nav-active':''}>UseEffectTemplate</NavLink>
          <NavLink to={"/loader/2"} className={({isActive})=>isActive?'nav-active':''}>Loader</NavLink>
          <NavLink to={"/level"} className={({isActive})=>isActive?'nav-active':''}>Level</NavLink>
          <NavLink to={"/useMemoPage"} className={({isActive})=>isActive?'nav-active':''}>UseMemoPage</NavLink>
          <NavLink to={"/useCallbackPage"} className={({isActive})=>isActive?'nav-active':''}>useCallbackPage</NavLink>

          <NavLink to={"/useRefPage"} className={({isActive})=>isActive?'nav-active':''}>useRefPage</NavLink>
          <NavLink to={"/useContextPage"} className={({isActive})=>isActive?'nav-active':''}>useContextPage</NavLink>
          <NavLink to={"/useTransitionPage"} className={({isActive})=>isActive?'nav-active':''}>useTransitionPage</NavLink>
          <NavLink to={"/useDeferredValuePage"} className={({isActive})=>isActive?'nav-active':''}>useDeferredValuePage</NavLink>
          <NavLink to={"/useDebugValuePage"} className={({isActive})=>isActive?'nav-active':''}>useDebugValuePage</NavLink>
          <NavLink to={"/useImperativeHandlePage"} className={({isActive})=>isActive?'nav-active':''}>useImperativeHandlePage</NavLink>
          
          </div>
        
        <Outlet></Outlet>
      </div>
  )
}


export const loader = () => {
  console.log("加载Loader 组件时调用")
  return {name:"芜湖",
    list:[1,2,3]
  }
}



export default App