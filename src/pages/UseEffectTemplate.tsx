import { createRef, useEffect, useLayoutEffect, useState } from "react"

// 执行顺序 https://s21.ax1x.com/2024/04/27/pkiuQzQ.png

function useEffectTemplate() {

    const now_time = new Date().getTime()+200
    while(now_time > new Date().getTime() ){
        console.log("模拟阻塞")
    }

    const [name,setName] = useState('张三')

    const myRef = createRef() as React.MutableRefObject<HTMLDivElement>
    useEffect(() => {
        console.log("useEffect",name)
        setUseEffectData(1)
        console.log(myRef)

        return () => {
            console.log("return-useEffect",name)
        }
    })


    useLayoutEffect(() => {
        setUseLayoutEffectData(1)
    })

    const [useEffectData,setUseEffectData] = useState(0)
    const [useLayoutEffectData,setUseLayoutEffectData] = useState(0)


    return(
        <div>
            我是useEffectTemplate
            <button onClick={()=>setName(name+1)}>修改{name}</button>

            <p ref={myRef}>我是p标签</p>

            <p>我是useEffect要改变的值-{useEffectData}</p>
            <p>我是useLayoutEffect要改变的值-{useLayoutEffectData}</p>
        </div>
    )

}

export default useEffectTemplate