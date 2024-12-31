import React from 'react';
import '../ProductsPage/ProductsPage.css';
import FilterFruits from '../../components/Filter/Filter';
import { ProductCard } from '../../components/ProductCard/ProductCard';
//import { useSelector } from 'react-redux';
//import { productsSelector } from '../../redux/store';

const ProductsPage = () => {
  //const products = useSelector(productsSelector);

  return (
    <section className="section-fruits section">
      <div className="container">
        <h1 className="section-title">Екзотичні фрукти</h1>
        <div className="wrap-container-catalog">
          <FilterFruits />
          <div className="catalog-fruits">
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
