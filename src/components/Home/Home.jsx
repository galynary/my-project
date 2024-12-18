import './Home.css';

export const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-inner container">
          <div className="hero-content">
            <h1 className="hero-title">Екзотичні фрукти з всього світу</h1>
            <p className="hero-text">
              Більше 200 тисяч видів екзотичних фруктів зібрано вручну,
              спеціально для вас
            </p>
            <button type="button" className="hero-button">
              Вибрати фрукти
            </button>
          </div>
          <div className="hero-product"></div>
        </div>
      </div>
    </>
  );
};
