import React from 'react';
import './Filter.css';
const FilterFruits = () => {
  return (
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
  );
};

export default FilterFruits;
