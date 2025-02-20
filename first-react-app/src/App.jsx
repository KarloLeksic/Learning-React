function App (){
    return (
        <section>
            <Password isValid={true}/>
        </section>
    );
}

export default App;

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
    // if(isValid){
    //     return <ValidPassword/>;
    // }
    //
    // return <InvalidPassword/>;

    return isValid ? <ValidPassword/> : <InvalidPassword/>;
//     Cak se moze i izbaciti return i {} isto bi radilo
};