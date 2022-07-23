import Counter from "./components/counter";
import { useDispatch } from "react-redux";
import {
  incrementAction,
  decrementAction,
  useCurrentCount,
} from "./redux/reducers/counterSlice";
import UserCard from "./components/card";
import { useState } from "react";
import { Home } from "./layout/Home";

function App() {
  const [visibleCard, setVisibleCard] = useState(false);
  const currentCount = useCurrentCount();
  const dispatch = useDispatch();
  const incrementBtn = () => {
    dispatch(incrementAction(5));
  };
  const decrementBtn = () => {
    dispatch(decrementAction(2));
  };
  return (
    <div className="App">
      <Home>
        <h1 style={{ textAlign: "center" }}>Redux slice</h1>
        <h2 style={{ textAlign: "center" }}>{currentCount}</h2>
        <button onClick={incrementBtn}>+</button>
        <button onClick={decrementBtn}>-</button>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginInline: "16px",
          }}
        >
          <Counter />
          <button onClick={() => setVisibleCard(!visibleCard)}>
            Go to cards
          </button>
        </div>
      </Home>
      {visibleCard && <UserCard />}
    </div>
  );
}

export default App;
