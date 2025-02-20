import { useState } from 'react';

function App (){
    const [movie, setMovie] = useState({
        title: 'Equalizer 3',
        ratings: 7,

    });

    const handleClick = () => {
        // const copyMovie = {
        //     ...movie,
        //     ratings: 5
        // };

        // setMovie(copyMovie);

        setMovie({...movie, ratings: 5});
    };

    return (
        <>
            <h1>Title: {movie.title}</h1>
            <p>Ratings: {movie.ratings}</p>
            <button onClick={handleClick}>Change Rating</button>
        </>
    );
}

export default App;


