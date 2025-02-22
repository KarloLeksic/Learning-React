import { useId } from 'react';

const UniqueId = () => {
    const id = useId();

    return (
        <>
            <label htmlFor={`${id}-email`}>Email</label>
            <input type="email" id={`${id}-email`} />

            <br />

            <label htmlFor={`${id}-pass`}>Password</label>
            <input type="password" id={`${id}-pass`} />
        </>
    );
};
export default UniqueId;
