import { useState } from "react";
import { Button, Carousel, Image, NavLink } from "react-bootstrap";
import Food from "../../../assets/img/Food.png";
import Clothes from "../../../assets/img/Clothes.png";

function Carouseltela() {
  const [doar] = useState([
    {
      id: 0,
      name: "Fundo Social de Solidariedade",
      photo: Food,
      URL: "https://www2.bauru.sp.gov.br/gabinete/fundosocialsolidariedade/",
    },
    {
      id: 2,
      name: "Campanha do agasalho",
      photo: Clothes,
      URL: "https://www2.bauru.sp.gov.br/materia.aspx?n=40892",
    },
  ]);

  return (
    <div>
      <div className="carousel slide" data-bs-ride="carousel">
        <Carousel fade className="Banner">
          {doar.map((image) => (
            <Carousel.Item>
              <Image src={image.photo} fluid={true} />
              <div className="carousel-caption d-none d-md-block">
                <Button href={image.URL}>{image.name}</Button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Carouseltela;
