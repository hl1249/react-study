import { useMemo, useState } from "react"

function getCount(count:number): number{
    let result = 0
    console.time()
    for(let i = 0;i < count*1000000000;i++){
        result += i
    }
    console.timeEnd()
    return result
}

const CildrenComponents: React.FC = () => {

    const [count,setCount] = useState(0)

    const overCount = useMemo<number>(()=>{
        return getCount(count)
    },[count]) 
    const childAdd = () => {
        setCount(count + 1)
    }

    const childRemove = () => {
        setCount(count - 1)
    }

    return (
        <div>
             <button onClick={childAdd}>子组件count+1</button>
             <button onClick={childRemove}>子组件count-1</button>
            <p>子组件值-{count}</p>
            <p>子组件overCount-{overCount}</p>
        </div>
    )
}



const UseMemoPage: React.FC = () => {

    const [count,setCount] = useState(0)    
    const fatherAdd = () => {
        setCount(count + 1)
    }

    

    const fatherRemove = () => {
        setCount(count - 1)
    }

    return(
        <div>
            <p>useMemo使用</p>
            <button onClick={fatherAdd}>父组件count+1</button>
            <button onClick={fatherRemove}>父组件count-1</button>
            <p>父组件值-{count}</p>
            <CildrenComponents/>
        </div>
    )
}

export default UseMemoPage