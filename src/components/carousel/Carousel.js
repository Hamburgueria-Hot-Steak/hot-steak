import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; 

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '10%',
    autoplay: true, // Adicione esta linha
    autoplaySpeed: 3000, // Defina o intervalo desejado em milissegundos
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '10%',
        },
      },
    ],
  };  

  return (
    <Slider {...settings}>
      <div>
        <img src="./assets/promo1.png" alt="Imagem 1" className="carousel-image" />
      </div>
      <div>
        <img src="./assets/promo2.png" alt="Imagem 2" className="carousel-image" />
      </div>
      <div>
        <img src="./assets/promo3.png" alt="Imagem 3" className="carousel-image" />
      </div>
      <div>
        <img src="./assets/promo4.png" alt="Imagem 4" className="carousel-image" />
      </div>
    </Slider>
  );
};

export default Carousel;