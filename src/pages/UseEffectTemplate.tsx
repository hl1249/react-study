import { useEffect, useState } from "react"

function useEffectTemplate() {

    const [name,setName] = useState('')

    useEffect(() => {
        console.log("useEffectTemplate")

        return () => {
            console.log("useEffectTemplate return")
        }
    })



    return(
        <div>
            我是useEffectTemplate
        </div>
    )
}

export default useEffectTemplate