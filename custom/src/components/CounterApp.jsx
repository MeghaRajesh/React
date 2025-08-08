import { useCounter } from "../hooks/Counter"

export const CounterApp = () => {
    const { count, increment, decrement,reset } = useCounter();
    return (
        <div>
            <input type="button" value="-" onClick={decrement} />&nbsp;&nbsp;&nbsp;
            {count}&nbsp;&nbsp;&nbsp;
            <input type="button" value="+" onClick={increment} /><br/><br/>
            <input type="button" value="Reset" onClick={reset} />
        </div>
    );

}