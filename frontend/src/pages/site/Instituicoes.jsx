import React, { useState } from "react";
import { useEffect } from "react";
import { Container, NavLink, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import insti_img from "../../assets/img/instituicoes.png";
import principal_img from "../../assets/styles/Instituicao.css";
import Footer from "./components/Footer";

export default function Instituicoes() {
  const [data, setData] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch("http://localhost:2000/")
=======
    fetch("http://localhost:2000/clients")
>>>>>>> 263b9da0413d413ac00916b8fe825489b6749bc8
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <div>
      <Container className="mt-3">
        <img src={insti_img} className="principal_img" />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, id) => (
              <tr key={id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.image} width={100} />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
<<<<<<< HEAD
                  <NavLink href={item.site}>Site</NavLink>
=======
                <a onClick={() => window.open(item.site)} href='javascript:void(0);'>Site</a>
>>>>>>> 263b9da0413d413ac00916b8fe825489b6749bc8
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Footer />
      </Container>
    </div>
  );
}
