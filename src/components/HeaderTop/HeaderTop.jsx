import '../HeaderTop/HeaderTop.css';
export const HeaderTop = () => {
  return (
    <>
      <div className="header-top">
        <div className="header-container container">
          <div className="header-top-contant">
            <ul className="header-nav-menu">
              <li className="header-nav-item">
                <a className="header-link" href="about">
                  Про компанію
                </a>
              </li>
              <li className="header-nav-item">
                <a className="header-link" href="contacts">
                  Конакти
                </a>
              </li>
              <li className="header-nav-item">
                <a className="header-link" href="fruits">
                  Акції
                </a>
              </li>
            </ul>
            <div className="header-right-contant">
              <div className="header-languages">
                <a className="header-link" href="fruits">
                  En Uk
                </a>
              </div>
              <div className="header-user">
                <a className="header-link" href="about">
                  Особистий кабінет
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
