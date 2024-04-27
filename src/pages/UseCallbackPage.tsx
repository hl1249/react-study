import React, { useCallback } from "react"

interface Props {
    childValue: unknown;
    ChildFn: () => void;
}

const ChildrenComponent:React.FC<Props> = () => {
    console.log('子组件渲染执行')
    return(
        <div>
            <p>ChildrenComponent</p>
        </div>
    )
}

// 缓存组件 当父组件的props没有变化时，子组件不会重新渲染
const MemoChildrenComponent = React.memo(ChildrenComponent)

const UseCallbackPage: React.FC = () => {
    console.log('父组件渲染-执行')

    const [count, setCount] = React.useState(0)
    const [counts, setCounts] = React.useState(0)

    const changeCount = () => {
        setCount(count + 1)
    }
    const changeCounts = () => {
        setCounts(counts + 1)
    }

    const childValue = 1

    //缓存函数 当counts 没有变化时，ChildFn不会重新渲染 因为传给MemoChildrenComponent 组件的props没有变化
    //细节 MemoChildrenComponent 会遍历props 判断是否变化，如果其中有一个变化，则重新渲染组件
    const ChildFn = useCallback(() => {
            console.log('芜湖')
    },[counts])

    return(
        <div>
            <p>count-{count}</p>
            <button onClick={changeCount}>修改count</button>
            <p>counts-{counts}</p>
            <button onClick={changeCounts}>修改counts</button>
            <MemoChildrenComponent  childValue={childValue} ChildFn={ChildFn}/>
        </div>
    )
}

export default UseCallbackPage;