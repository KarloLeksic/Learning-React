// context API nam sluzi kad zelimo neke propse dijeliti u vise komponenti da ih nemoramo predavati svakoj komponenti ispod
import { createContext } from 'react';
import ComponentA from "./components/ComponentA.jsx";

// exportamo i kreiramo Data varijablu koja ce nam glumiti podatke koji su 'globalni
export const Data = createContext();

function App (){
    // Ovo su nasi podaci
    const name = 'Karlito';

    return (
        <>
            {/*Svi unutra ceju moci koristiti ove podatke - naglasavamo da je provider*/}
            <Data.Provider value={name}>
                <ComponentA />
            </Data.Provider>
        </>
    );
}

export default App;


