function App (){
    return (
        <section>
            <Weather temperature={26}/>
        </section>
    );
}

export default App;

const Weather = ({ temperature }) => {
    let weather = '';
    
    if(temperature < 15) {
        weather = 'It\'s cold outside';
    } else if (temperature < 25) {
        weather = 'It\'s nice outside';
    } else {
        weather = 'It\'s hot outside';
    }

    return (
        <>
            { weather }
        </>
    );
}