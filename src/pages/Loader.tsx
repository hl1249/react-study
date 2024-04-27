
import { useLoaderData,useParams ,useNavigation} from "react-router-dom"

interface LoaderProps {
    
}

const Loader:React.FC<LoaderProps> = ()=> {
    interface dataProps {
        name:string,
        list:Array<number>
    }
    const data = useLoaderData() as dataProps
    const param = useParams()
    
    const navigation = useNavigation()
    console.log('data',data)
    console.log('param',param)
    console.log('navigation',navigation)
    return (
        <div>
            <p>数据路由传值：{data.name}</p>
            <ul>
                    {data.list.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>
        </div>
    )
}

export default Loader