import React, { useState } from 'react'
import { useContext } from 'react';
import { useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/styles/CardCarrosel.css'
// import { Context } from './context/OngsContext';


    function CardCarrossel() {
        const [data, setData] = useState([]);
        const carrousel = useRef(null);
        // const { list, ongs } = useContext(Context);

    useEffect(() => {
        fetch('http://localhost:2000/clients')
            .then((response) => response.json())
            .then(setData);
    }, [])

    // useEffect(() => {
    //     list();
    // }, []);

   const handleLeftClick = (e) => {
 
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
    }

   const handleRightClick = (e) => {
  
    carrousel.current.scrollLeft += carrousel.current.offsetWidth;
    }

    if (!data || !data.length) return null;

    return(
        <div className="container">
            <div className="carrousel" ref={carrousel}>
                {data.map((item) => {
                    const {id, name, image} = item;
                return (
                    <div className="item" key={id}>
                    <div className="image" >
                        <img src={image} alt={name} />
                    </div>
                    <div className="info">
                        <span className="name">{name}</span>
                        <Button as={Link} to={`/instituicoes/${id}`}>Mais informações</Button>
                    </div>
                </div>
                );
                })}
           </div>
           <div className='buttons'>
            <button onClick={handleLeftClick}>
                <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left"/>
            </button>
            <button onClick={handleRightClick}>
                <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right"/>
            </button>
           </div>
        </div>

    )
}

export default CardCarrossel;