import { useState } from 'react';
import ComponentOne from "./components/ComponentOne.jsx";
import ComponentTwo from "./components/ComponentTwo.jsx";

function App (){
    const [count, setCount] = useState(0);
    // Ovako ceju ove dvije komponente dijeliti state

    return (
        <>
            <ComponentOne count={count} onClickHandler={() => setCount(count + 1)}/>
            <ComponentTwo count={count} onClickHandler={() => setCount(count - 1)} />
        </>
    );
}

export default App;


