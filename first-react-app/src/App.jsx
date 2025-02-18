import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Greeting from "./components/Greeting.jsx";
import ProductionInfo from "./components/ProductionInfo.jsx";

function App (){
    return (
        <>
            <Header/>
            <MainContent/>
            <Greeting/>
            <ProductionInfo/>
            <Footer/>
        </>
    );
}

export default App;