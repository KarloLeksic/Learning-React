import { useReducer, useState } from 'react';
import { counterReducer, initialState } from '../counterReducer.js';

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0);

    const handleIncrement = () => dispatch({ type: 'increment' });
    const handleDecrement = () => dispatch({ type: 'decrement' });

    const handleIncrementByAmount = () => {
        dispatch({ type: 'incrementByAmount', payload: +inputValue });
        setInputValue(0);
    };

    const handleDecrementByAmount = () => {
        dispatch({ type: 'decrementByAmount', payload: +inputValue });
        setInputValue(0);
    };

    return (
        <>
            <h2>Count: {state.counter}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>

            <div>
                <input
                    type="number"
                    value={inputValue}
                    placeholder="Enter increment/decrement step"
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <button onClick={handleIncrementByAmount}>Add</button>
                <button onClick={handleDecrementByAmount}>Subtract</button>
            </div>
        </>
    );
};
export default Counter;
