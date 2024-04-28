import { useState ,useId} from "react";

const ChildComponent = () => {
  const id = useId()
  console.log('p-2',id)
  return (
    <div> 

    </div>
  )
}

const useDebugValuePage = () => {
  const [count] = useState('我的发')
  const id = useId()
  console.log(count)
  console.log('p-1',id)
  // useDebugValue(count)
  return (
    <div>
      useDebugValue
      <ChildComponent/>
      <ChildComponent/>
    </div>
  )
  }

  export default useDebugValuePage
