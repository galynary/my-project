import '../SharedLayout/SharedLayout.css';
export const SharedLayout = () => {
  return (
    <>
      <header className="header">
        <div className="header-container container">
          <div className="header-logo"></div>
          <ul className="header-nav-list">
            <li className="header-nav-item">Галерея</li>
            <li className="header-nav-item">Фрукти</li>
            <li className="header-nav-item">Про нас</li>
            <li className="header-nav-item">Контакти</li>
          </ul>
        </div>
      </header>
    </>
  );
};
