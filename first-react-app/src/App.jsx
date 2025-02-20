import User from "./components/User.jsx";
import Person from "./components/Person.jsx";

function App (){
    return (
        <>
            <User img='neki src da ne baca gresku'
                  name='Karlito'
                  age={22}
                  isMarried={false}
                  hobbies={['Coding', '3D printing']} />

            <Person name="Karlito"
                    age={24}/>
        </>
    );
}

export default App;