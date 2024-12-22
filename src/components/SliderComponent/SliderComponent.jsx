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
        "Відкрийте для себе неповторний смак екзотичних лимонів! Їхня соковита м'якоть додасть яскравості будь-якій страві або напою. Спробуйте їх зараз і насолоджуйтеся свіжістю тропіків у кожному кусочку!",
      buttonText: 'Перейти до галареї',
      price: '50грн./кг',
    },
    {
      image: img2,
      title: 'Ківі – енергія в кожному шматочку!',
      description:
        "Тропічне ківі — це справжня вітамінна бомба для вашого організму! Його ніжна текстура і кислуватий смак чудово поєднуються з іншими фруктами або просто як самостійний десерт. Замовляйте зараз і додавайте здоров'я в кожен день",
      buttonText: 'Перейти до галареї',
      price: '180грн./кг',
    },
    {
      image: img3,
      title: 'Свіжі апельсини прямо з саду!',
      description:
        'Екзотичні апельсини — це найкраща дозу вітаміну C в кожному шматочку! Їхній солодкий і соковитий смак зробить будь-який ранок яскравішим. Придбати ці апельсини — це не просто покупка, а справжнє свято смаку!',
      buttonText: 'Перейти до галареї',
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
