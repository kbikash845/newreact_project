import React, { useState, useEffect } from 'react';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('grid'); // Default view is grid

  useEffect(() => {
    
      const fetchData = async () => {
        try {
          const response = await fetch('https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093');
          const data = await response.json();
          console.log(data); // Add this line to check the API response
          setProducts(data.products);
        
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
      
  const filteredProducts = products ? products.filter((product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
) : [];

  return (
    <div className="Main_contain">
      <h2>PLP</h2>
      <div className="content">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ListIcon onClick={() => setView('list')} />
        <GridViewIcon onClick={() => setView('grid')} />
      </div>
      <div className={view === 'grid' ? 'grid-view' : 'list-view'}>
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <span className="badge">{product.badge}</span>
            <div className="variants">{product.variants.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
