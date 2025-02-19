import User from "./components/User.jsx";

function App (){
    return (
        <>
            <User img=''
                  name='Karlito'
                  age={22}
                  isMarried={false}
                  hobbies={['Coding', '3D printing']} />
        </>
    );
}

export default App;