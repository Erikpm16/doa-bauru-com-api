import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import insti_img from "../../assets/img/instituicoes.png";
import Footer from "./components/Footer";
import { Context } from "./context/OngsContext";

export default function Instituicoes() {
  // const [data, setData] = useState([]);
  const { list, ongs } = useContext(Context);

  // useEffect(() => {
  //   fetch("http://localhost:2000/clients")
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);

  useEffect(() => {
    list();
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
            {ongs.map((item, id) => (
              <tr key={id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.image} width={100} />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                <a onClick={() => window.open(item.site)} href='javascript:void(0);'>Site</a>
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
