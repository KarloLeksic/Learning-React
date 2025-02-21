import { createPortal } from 'react-dom';
// portale koristimo kad ne zelimo renderirat komponentu tamo di bi se inace renderirala, ispod ovoga nego zelimo u posebnom divu kojeg smo napravili

const PopupContent = ({ copied }) => {
    // prvi parametar je ono sta zelimo u drugi div il gdje, a drugi gdje to zelimo
    return createPortal (
        <>
            { copied && (
                <div style={{ position: 'absolute', bottom: '3rem'}}>Copied to Clipboard!</div>
            ) }
        </>,
        document.querySelector('#popup-content')
    );
}
export default PopupContent;
