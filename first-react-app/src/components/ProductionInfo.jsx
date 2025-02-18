function ProductionInfo() {
    const product = {
        name: 'Laptop',
        price: '$1200',
        availability: 'In Stock'
    }

    return (
        <>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Availability: {product.availability}</p>
        </>
    );
}

export default ProductionInfo;