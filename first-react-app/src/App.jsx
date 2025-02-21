// context API nam sluzi kad zelimo neke propse dijeliti u vise komponenti da ih nemoramo predavati svakoj komponenti ispod
import { createContext } from 'react';
import ComponentA from "./components/ComponentA.jsx";

// exportamo i kreiramo Data varijablu koja ce nam glumiti podatke koji su 'globalni
export const Data = createContext();
export const Data1 = createContext();

function App (){
    // Ovo su nasi podaci
    const name = 'Karlito';
    const age = 24;

    return (
        <>
            {/*Svi unutra ceju moci koristiti ove podatke - naglasavamo da je provider*/}
            <Data.Provider value={name}>
                <Data1.Provider value={age}>
                    <ComponentA />
                </Data1.Provider>
            </Data.Provider>
        </>
    );
}

export default App;


