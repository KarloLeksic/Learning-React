import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Greeting from "./components/Greeting.jsx";
import ProductionInfo from "./components/ProductionInfo.jsx";
import List from "./components/List.jsx";
import UserList from "./components/UserList.jsx";

function App (){
    return (
        <>
            <Header/>
            <MainContent/>
            <Greeting/>
            <ProductionInfo/>
            <List/>
            <UserList/>
            <Footer/>
        </>
    );
}

export default App;