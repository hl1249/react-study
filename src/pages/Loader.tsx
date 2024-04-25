
import { Outlet,useLoaderData } from "react-router-dom"

interface LoaderProps {
    
}

const Loader:React.FC<LoaderProps> = ()=> {
    const data = useLoaderData()

    console.log('data',data)
    return (
        <div>
            哈哈哈
            <Outlet></Outlet>
            
        </div>
    )
}

export default Loader