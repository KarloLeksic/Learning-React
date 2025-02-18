function List() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <ul>

            { data.map((number) => (
                <li key={number}>{number}</li>
            )) }

            </ul>
        </>
    );
}

export default List;