import Navigation from './Navigation/Navigation';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import { useState } from 'react';

import products from './db/data';
import Card from './components/Card.jsx';

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Input filter
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = products.filter(
        (product) =>
            product.title
                .toLocaleLowerCase()
                .indexOf(query.toLocaleLowerCase()) !== -1
    );

    // Radio filter
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Buttons filter
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;

        // Filtering input items
        if (query) {
            filteredProducts = filteredItems;
        }

        // Selected Filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }

        return filteredProducts.map(
            ({ img, title, reviews, prevPrice, newPrice }) => (
                <Card
                    key={Math.random()}
                    img={img}
                    title={title}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                />
            )
        );
    }

    const result = filteredData(products, selectedCategory, query);

    return (
        <>
            <Sidebar handleChange={handleChange} />
            <Navigation query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            <Products result={result} />
        </>
    );
};
export default App;
