import React from 'react'
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
// import DestaqueCards from './components/DestaqueCards';
import { Container } from 'react-bootstrap';
import fundo from '../../assets/styles/fundo.css';
import CardCarrossel from './CardCarrossel';



export default function Home() {


    return (
        <div className="fundo" >
            <Container className="fundo-container">
                <Carousel />
                <CardCarrossel />
                <Accordion />
            </Container>
            <Footer />
        </div>
    );
}