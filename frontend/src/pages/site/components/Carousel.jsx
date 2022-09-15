import { useState } from 'react';
import { Button, Carousel, Image, NavLink } from 'react-bootstrap';
import Food from '../../../assets/img/Food.png';
import Clothes from '../../../assets/img/Clothes.png';



function Carouseltela() {

 
  const [doar] = useState([
    {
      id: 0,
      name: "Entrega de Refeições",
      photo: Food
    },
    {
      id: 2,
      name: "Entrega de Roupas em Geral",
      photo: Clothes
    }
  ]);

  return (
    <div >
    <div className="carousel slide" data-bs-ride="carousel" >
    <Carousel fade className='Banner'  >
      {doar.map((image) => (
        <Carousel.Item>
          <Image src={image.photo} fluid={true}/>
          <div className="carousel-caption d-none d-md-block">
        <Button href="/instituicoes">{image.name}</Button>
      </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    </div>
    
  )
}

export default Carouseltela;