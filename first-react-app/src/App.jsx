import { useState, useEffect } from 'react';

function App (){
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();

            if (data && data.length) setData(data);
        }

        getData();

        // Prazan dependency array znaci da ce se ovo pokrenuti SAMO JEDNOM
    }, []);

    return (
        <>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    );
}

export default App;


