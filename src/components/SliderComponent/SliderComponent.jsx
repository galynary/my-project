import React from 'react';
import Slider from 'react-slick';
import './SliderComponent.css';
import img1 from '../../images/lemons.png';
import img2 from '../../images/kiwi.png';
import img3 from '../../images/orange.png';

export const SliderComponent = () => {
  const slides = [
    {
      image: img1,
      title: 'Екзотичні фрукти з усього світу',
      description:
        'Більше 200 тисяч видів екзотичних фруктів зібрано вручну спеціально для вас',
      buttonText: 'Перейти до галареї',
      price: '50грн./кг',
    },

    {
      image: img2,
      title: 'Ківі – енергія в кожному шматочку!',
      description:
        'Ніжне ківі з екзотичним смаком – справжній заряд вітамінів у кожному шматочку!',
      buttonText: 'Переглянути',
      price: '180грн./кг',
    },
    {
      image: img3,
      title: 'Свіжі апельсини прямо з саду!',
      description:
        'Насолоджуйтесь натуральним смаком апельсинів та отримуйте вітаміни прямо зараз!',
      buttonText: 'Докладніше',
      price: '150грн./кг',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={`slide bg-${index + 1}`}>
            <div className="slide-content">
              <div className="slide-inner text-content">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-text">{slide.description}</p>
                <button className={`slide-button bt-${index + 1}`}>
                  {slide.buttonText}
                </button>
              </div>
              <div className="slide-inner wrap-slide-img">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="slide-img"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
