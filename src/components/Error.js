import { useRouteError } from "react-router-dom";
import '../../index.css'
const Error=()=>{
    const err = useRouteError();
    console.log("error",err)
    return <div className="error__container">
    <h2>Opps!!!</h2>
    <p>somthing went wrong</p>
    <h2>{err.status+ " "+ err.statusText}</h2>
    </div>
}

export default Error;