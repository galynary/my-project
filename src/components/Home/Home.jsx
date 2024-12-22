import './Home.css';
//import img from '../../images/lemons.png';
import { SliderComponent } from '../SliderComponent/SliderComponent';

export const Home = () => {
  return (
    <>
      <main className="wrap-slider">
        {' '}
        <SliderComponent />
      </main>

      {/* <div className="hero">
        <div className="hero-inner">
          <div className="hero-content hero-container">
            <h1 className="hero-title">Екзотичні фрукти з всього світу</h1>
            <p className="hero-text">
              Більше 200 тисяч видів екзотичних фруктів зібрано вручну,
              спеціально для вас
            </p>
            <button type="button" className="hero-button">
              Вибрати фрукти
            </button>
          </div>
          <div className="hero-product hero-container">
            <img src={img} alt="lemons" className="hero-img" />
          </div>
        </div>
      </div>*/}
    </>
  );
};
