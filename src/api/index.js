import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/reducers/userSlice";
const ApiProvider=(props)=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then((res)=>dispatch(userActions(res.data)))
    },[dispatch])
    return(
        <div>
            {props.children}
        </div>
    )
}
export default ApiProvider;