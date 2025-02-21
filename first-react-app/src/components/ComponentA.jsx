import {Data, Data1} from '../App';

const ComponentA = () => {
    return (
        // Ovaj prima te podatke i unutra imamo te nase podatke
        <Data.Consumer>
            { (name) => {
                return (
                    <Data1.Consumer>
                        {(age) => {
                            return <h1>My name is: {name}, age: {age}</h1>
                        }}
                    </Data1.Consumer>
                )
            } }
        </Data.Consumer>
    );
}
export default ComponentA;
