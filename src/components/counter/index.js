import { useCurrentCount } from "../../redux/reducers/counterSlice";

const Counter=()=>{
    const currentCount=useCurrentCount()
    return(
        <div>
            <h2>Current Count:{currentCount}</h2>
        </div>
    )
}
export default Counter;