import {useState} from "react";

const Example = () => {
    // Kad mu predamo funkciju
    const [count, setCount] = useState(() => {
        // Ovo ce se smo izvrsiti prvi put kad se pokrene, rekao bi kao init u alpine-u
        const initialCount = 10;
        return initialCount;
    });

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    );
}
export default Example;
