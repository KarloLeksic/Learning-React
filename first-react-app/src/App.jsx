import { useRef } from 'react';

function App() {
    // const element = useRef(null);
    // console.log(element); // dobijemo objekt koji ima current: null - jer smo null postavili

    const inputElement = useRef(null);
    console.log(inputElement);

    const focusInput = () => {
        inputElement.current.focus();
        // Radimo bilo sta
        inputElement.current.value = 'Karlito';
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={() => focusInput()}>Focus</button>
        </>
    );
}

export default App;
