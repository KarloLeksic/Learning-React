function App (){
    return (
        <section>
            <InlineStyle/>
        </section>
    );
}

export default App;

const InlineStyle = ({ temperature }) => {
    // Moze ovako ko objekt i onda se samo preda varijabla dole
    const styles = {
        color: 'red',
        backgroundColor: 'lime',
        padding: '2rem',
    }

    return (
        <>
            {/*Vazno je napomenuti da treba 2 puta zagrade i da se propertiji pisu ko u javascriptu zato kad to je JS*/}
            <h1 style={styles}>
                Inline Styling
            </h1>
        </>
    );
}