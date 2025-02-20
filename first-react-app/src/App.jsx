function App (){
    return (
        <section>
            <InlineStyle/>
        </section>
    );
}

export default App;

const InlineStyle = ({ temperature }) => {

    return (
        <>
            {/*Vazno je napomenuti da treba 2 puta zagrade i da se propertiji pisu ko u javascriptu zato kad to je JS*/}
            <h1 style={{ color: 'red', backgroundColor: 'lime'}}>
                Inline Styling
            </h1>
        </>
    );
}