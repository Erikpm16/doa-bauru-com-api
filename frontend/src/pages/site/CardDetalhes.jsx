import React, { useState } from 'react'
import { useEffect } from 'react';
import { Breadcrumb, Button, Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import '../../assets/styles/CardDetalhes.css'

export default function CardDetalhes() {
    const params = useParams();

    const [instituicao, setTnstituicao] = useState();

    useEffect(() => {

        fetch('http://localhost:3000/static/ong.json')
            .then((response) => response.json())
            .then(setTnstituicao);

    }, [params]);

    if (!instituicao) return (<p>Carregando ...</p>)

    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/instituicoes" }}>
                    Instituições
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{instituicao.name}</Breadcrumb.Item>
            </Breadcrumb>
            <div className='imagem'>
                <img src={instituicao.image} />
            </div>
            <div className='titulo'>
                <h1>{instituicao.name}</h1>
                <Button>Contato</Button>
            </div>
        </Container>
    )
}
