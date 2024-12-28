import React from 'react';
import '../ProductsPage/ProductsPage.css';
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
          <div className="catalog-nav">
            <ul className="nav-fruits-lists">
              <li className="nav-fruits-item">
                <a className="nav-fruits-link" href="кісточкові">
                  Всі фрукти
                </a>
              </li>
              <li className="nav-fruits-item">
                <a className="nav-fruits-link" href="кісточкові">
                  Кісточкові
                </a>
              </li>
              <li className="nav-fruits-item">
                <a className="nav-fruits-link" href="ягідні">
                  Ягідні
                </a>
              </li>
              <li className="nav-fruits-item">
                <a className="nav-fruits-link" href="citrus">
                  Цитрусові
                </a>
              </li>
              <li className="nav-fruits-item">
                <a className="nav-fruits-link" href="exotic">
                  Екзотичні
                </a>
              </li>
            </ul>
          </div>
          <div className="catalog-fruits">
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
