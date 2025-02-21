import { Data } from '../App';

const ComponentA = () => {
    return (
        // Ovaj prima te podatke i unutra imamo te nase podatke
        <Data.Consumer>
            { (name) => {
                return <h1>Name: {name}</h1>
            } }
        </Data.Consumer>
    );
}
export default ComponentA;
