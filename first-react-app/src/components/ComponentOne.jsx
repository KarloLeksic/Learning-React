const ComponentOne = ({count, onClickHandler}) => {
    return (
        <>
            <p>{count}</p>
            <button onClick={onClickHandler}>Increment</button>
        </>
    );
}
export default ComponentOne;
