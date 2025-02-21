// useEffect se koristi kada zelimo pokrenuti neki kod:
// Kada se komponenta renderira (prvi put) i kada se re-renderra
// Kad se neki podaci u komponenti promijene
import { useState, useEffect } from 'react';

function App (){
    const [value, setValue] = useState(0);

    // OVO NIKAD NESMIJEMO STAVLJATI U IF
    // if moze biti unutra, ali useEffect se mora uvijek pozivati
    useEffect(() => {
        // tu nam ide ono sta zelimo
        // drugi parametar je dependency array
        // to znaci da samo kad se taj state mijenja onda ce se ovo izvrsiti
        console.log('call use efect');
        document.title = `Increment ${value}`;
    }, [value]);

    return (
        <>
            <h2>{value}</h2>
            <button onClick={() => setValue(value + 1)}>Click Me</button>
        </>
    );
}

export default App;


