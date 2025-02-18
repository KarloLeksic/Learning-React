function Greeting() {
    const message = 'Hello world';
    const date = new Date().getDate();

    return (
        <>
            <h2>{message}</h2>
            <p>{date}</p>
        </>
    );
}

export default Greeting;