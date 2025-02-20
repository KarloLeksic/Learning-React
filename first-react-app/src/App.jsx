import { useState } from 'react';

function App (){
    const [friends, setFriends] = useState(['Alex', 'John', 'Doe']);

    // Ovako mozemo dodati novog prijatela
    // Ove tri tocke samo kopiraju sve sta je trenutno i naravno ovo na kraj samo dodaje
    const addOneFriend = () => setFriends([...friends, 'Karlito']);

    // Ovo ce obrisati samo johna
    const removeOneFriend = () => setFriends(friends.filter(f => f !== 'John'));

    // Promijena specificnog imena, ako nije onda vrati samo staro
    const updateOneFriend = () => {
        setFriends(friends.map(f => f === 'Alex' ? 'Alex Smith' : f));
    };

    return (
        <>
            {friends.map(f => (
                <li key={Math.random()}>{f}</li>
            ))}

            <button onClick={addOneFriend}>Add New Friend</button>
            <button onClick={removeOneFriend}>Remove Friend</button>
            <button onClick={updateOneFriend}>Update Friend</button>
        </>
    );
}

export default App;


