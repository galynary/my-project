import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuantity } from '../../redux/products/productsSlice';
import { Counter } from '../Counter/Counter';
import '../ProductCard/ProductCard.css';

export const ProductCard = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  const handleCountChange = (id, count) => {
    dispatch(setQuantity({ id, quantity: count }));
  };

  const calculateTotalPrice = (price, quantity) => {
    return price * quantity;
  };

  return (
    <div
      className="cards-list"
      style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}
    >
      {products.map(product => (
        <div className="cards-item" key={product.id}>
          <img
            className="product-img"
            src={product.url}
            alt={product.title}
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h3 className="product-title">{product.title}</h3>
          <div className="price-container">
            <span className="price-span">ціна за 1 кг.</span>
            <p className="product-price">{product.price}</p>
          </div>

          <div className="wrap-sum">
            <Counter
              initialCount={product.quantity}
              onCountChange={count => handleCountChange(product.id, count)}
            />
            <div className="sum-cotainer">
              <p className="sum-text">сума</p>
              <div className="sum">
                {calculateTotalPrice(product.price, product.quantity)}
              </div>
            </div>
          </div>
          <button className="btn-bay button" type="button">
            Купити
          </button>
        </div>
      ))}
    </div>
  );
};
