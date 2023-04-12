import React from "react";


function BeerItem({image, name, ABV, open}) {
    
    return (
    <div className="beerItem" onClick={open}>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name}</h1>
        <p> {ABV}</p>
       
    </div>
    );
}

export default BeerItem;

