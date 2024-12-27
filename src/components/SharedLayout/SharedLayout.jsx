import React from 'react';
import { Link } from 'react-router-dom';
import '../SharedLayout/SharedLayout.css';
import { HeaderTop } from 'components/HeaderTop/HeaderTop';
export const SharedLayout = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <HeaderTop />
          <div className="header-bottom">
            <div className="header-container container">
              <div className="header-bottom-contant">
                <div className="header-logo">
                  <span className="logo-text">LOGO</span>
                </div>
                <div className="header-contant">
                  <div className="header-catalog">
                    <Link to="/fruits" className="header-link">
                      {' '}
                      Каталог продуктів
                    </Link>
                    <ul className="products-list">
                      <li className="header-nav-item">
                        <a className="header-link" href="fruits">
                          Фрукти1
                        </a>
                      </li>
                      <li className="header-nav-item">
                        <a className="header-link" href="fruits">
                          Фрукти2
                        </a>
                      </li>
                      <li className="header-nav-item">
                        <a className="header-link" href="fruits">
                          Фрукти3
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-search">
                    <form action="search" className="form-search">
                      <input
                        className="search-input"
                        placeholder="пошук"
                        type="text"
                        name="text"
                      />
                      <button type="button">Знайти</button>
                    </form>
                  </div>
                  <div className="phone">
                    <a href="+3 (8050) 134 56 77" className="phone">
                      +3 (8050) 134 56 77
                    </a>
                  </div>
                  <div className="header-user">Кошик</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
