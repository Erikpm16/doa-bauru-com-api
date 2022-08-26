import React from 'react'
import { useState, useEffect, useRef } from 'react';
import '../../assets/styles/CardCarrosel.css'


    function CardCarrossel() {
        const [data, setData] = useState([]);
        const carrousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/static/ong.json')
            .then((response) => response.json())
            .then(setData);
    }, [])

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
                        <img src={image} alt={name} style={{ maxWidth: "100%" }}/>
                    </div>
                    <div className="info">
                        <span className="name">{name}</span>
                        <button>
                        <span className="contato">contato</span>
                        </button>
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