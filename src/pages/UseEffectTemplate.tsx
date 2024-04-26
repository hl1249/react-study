import { createRef, useEffect, useState } from "react"

function useEffectTemplate() {

    const [name,setName] = useState('张三')

    const myRef = createRef() as React.MutableRefObject<HTMLDivElement>
    useEffect(() => {
        console.log("useEffect",name)

        console.log(myRef)

        return () => {
            console.log("return-useEffect",name)
        }
    })



    return(
        <div>
            我是useEffectTemplate
            <button onClick={()=>setName(name+1)}>修改{name}</button>

            <p ref={myRef}>我是p标签</p>
        </div>
    )
}

export default useEffectTemplate