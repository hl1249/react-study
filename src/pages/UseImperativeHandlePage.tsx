import { useImperativeHandle ,forwardRef,useRef, useEffect} from "react"


const ChildComponent = forwardRef((props, ref) => {
  
  useImperativeHandle(ref, () => ({
    // 定义暴露给父组件的方法
    doSomething: () => {
      console.log('doSomething')
    },
  }) )
  return (
    <div>
      <p>自组建</p>
    </div>
  )
})
const UseImperativeHandlePage = () => {
  const myRef = useRef()

  useEffect(()=>{
    console.log('myRef',myRef.current)
    myRef.current.doSomething()
  })
  return (
    <div> 
      芜湖
      <ChildComponent ref={myRef}></ChildComponent>
    </div>
  )
  }

  export default UseImperativeHandlePage
