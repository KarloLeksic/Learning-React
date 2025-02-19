function UserList() {
    const users = [
        {id: 1, name: 'Karlo', age: 24},
        {id: 2, name: 'Mirko', age: 27},
        {id: 3, name: 'Stevo', age: 34},
    ];

    return (
        <>
            <h2>Users:</h2>
            {users.map(({id, name, age}) => (
                <ul key={id}>
                    <li>Id: {id}</li>
                    <li>Name: {name}</li>
                    <li>Age: {age}</li>
                </ul>
            ))};
        </>
    );
}

export default UserList;