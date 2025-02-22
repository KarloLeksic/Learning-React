import { useReducer } from 'react';

// ovo je lako, samo inicijalna vrijednost koju zelimo da bude
const initialState = { count: 0 };

// tu predajemo stanje i kako cemo mi mijenjati to stanje
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            // radimo kopiju cijelog naseg state-a (nekad cemo imat i vise od samog countera pa da ne izgubimo)
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'reset':
            return { ...state, count: 0 };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            {/*Tu pozivamo nasu dispatch metodu koje poziva nasu action metodu u reduceru i po tipu znamo sta radimo*/}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            <h1>Count: {state.count}</h1>
        </>
    );
}

export default App;
