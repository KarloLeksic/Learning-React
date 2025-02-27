import { ReactNode } from 'react';

// Ctrl + klik nas vodi u .d.ts di se inace nalaze definicije tipova
interface UserShape {
    children: ReactNode;
}

const User = ({ children }: UserShape) => {
    return <div>{children}</div>;
};
export default User;
