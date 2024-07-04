import { useRouteError } from "react-router-dom"


const ErrorPage=()=>{
    
    const err=useRouteError();

    return(
        <div className="error-page">
        <h1>Oops!!</h1>
        <h2>Something went wrong</h2>
        <h3>{err.status +": "+err.statusText}</h3>
        </div>
    )
}
export default ErrorPage