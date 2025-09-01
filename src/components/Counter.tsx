import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../state/store";
import { decrement, increment, incrementAsync, incrementByAmount } from "../state/counter/counterSlice";

export const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return <div>
        <h2>{count}</h2>
        <div>
            <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>;
}
