// Mozemo ovako napraviti poseban tip da kazemo koji ce podaci biti
// type UserShape = {
//     name: string;
//     age: number;
//     isStudent: boolean;
// };

// Isto mozemo i sa interface-om
interface UserShape {
    name: string;
    age: number;
    isStudent: boolean;
}

// Baca nam gresku jer moramo definirati koji su to tipovi
// Kad dodamo ove tipove, onda nam nece bacati gresku
const User = ({ name, age, isStudent }: UserShape) => {
    return (
        <>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{isStudent}</h2>
        </>
    );
};
export default User;
