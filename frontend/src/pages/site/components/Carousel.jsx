import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Food from '../../../assets/img/Food.png';
import Clothes from '../../../assets/img/Clothes.png';
import Blood from '../../../assets/img/Blood.png';
import Banner from '../../../assets/styles/Banner.css';


function Carouseltela() {

  const [images] = useState([Food, Clothes, Blood]);

  return (
    <Carousel fade className='Banner' >
      {images.map((image) => (
        <Carousel.Item>
          <Image src={image} fluid={true}/>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Carouseltela;