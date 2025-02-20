const ComponentTwo = ({count, onClickHandler}) => {
    return (
        <>
            <p>{count}</p>
            <button onClick={onClickHandler}>Decrement</button>
        </>
    );
}
export default ComponentTwo;
