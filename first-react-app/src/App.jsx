import { useState } from 'react';

function App (){
    // ovo je konvencija za ovo da ide set i to nesta
    // use state nam vrace varijablu kojoj zelimo pratiti stanje i funkciju i onda nam je najjednostavnije koristiti destructoring operator za koju varijablu zelimo pratit stanje i koja funkcija mjenja to stanje
    // 0 je pocetno stanje, moze biti i string i bilo sto
    const [count, setCount] = useState(0);

    // set count u sebi ima count jer smo ovako gore definirali i sad radimo sta ocemo s njim
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    // Koristi se setCount funkcija i onda on zna da ce refreshati content da ga vidimo.
    // Ako probamo samo count mijenjati onda se nece nista dogadati kad kliknemo, tj. necemo vidjeti. NE RADITI TO BEZ SET METODE

    return (
        <>
            <h1>{ count }</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
}

export default App;


