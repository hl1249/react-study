import { useRouteError } from 'react-router-dom'

interface ErrorObject {
    statusText?: string;
    message?: string;
    // 添加其他可能的错误属性
  }

const ErrorPage = () => {
   
    const error = useRouteError() as ErrorObject | null;
    console.log('error',error)
    return (
        <div>
            <h1>Error Page</h1>
            <p>Something went wrong!</p>
            <p>{error ? error.statusText || error.message : 'Unknown error'}</p>
        </div>
    )
}

export default ErrorPage