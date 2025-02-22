import { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </>
    );
}

export default App;

// sve je ovo lijepo i krasno, ali ako cemo ponavljati fetch puno puta onda opet moramo raditi tih par stvari. Umjesto toga mozemo podesiti custom hook, to je motoda koja se zove useNesta. U ovom slucaju bi ti bilo useFetch koja bi samo vratila podatke i odma ih imamo
