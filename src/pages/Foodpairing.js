import React, { useState } from "react";
import { BeerMenuList } from "../helpers/BeerMenuList";
import BeerItem from "../components/BeerItem";
import "../styles/Beer.css";
import { motion } from "framer-motion";
import "../styles/Modal.css";
//import { BiDrink } from 'react-icons/bi';
import { MdOutlineSubtitles, MdPercent } from 'react-icons/md';
/*website for icons: https://react-icons.github.io/react-icons/icons?name=md */

function Foodpairing() {
  const [modal, setModal] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState(null);

  const toggleModal = (beer) => {
    setSelectedBeer(beer);
    setModal(!modal);
  };

  return (
    <div className="beerMenu">
      <h2 className="beerMenuTitle"> Beer Menu </h2>
      <motion.div className="beerMenuList">
        {BeerMenuList.map((beerItem, key) => {
          return (
            <div onClick={() => toggleModal(beerItem)} key={key}>
              <BeerItem
                image={beerItem.image}
                name={beerItem.name}
                ABV={beerItem.ABV}
              />
              
            </div>
          );
        })}
      </motion.div>
      
      {modal && (
        <div className="modal">
          
          <div className="overlay" onClick={toggleModal} >
          <div className="modal-content">
            <img class='modal-img' src = {selectedBeer.image}/> 
            <h2 class = 'text'>{selectedBeer.name}</h2>
            <p class = 'text'><MdOutlineSubtitles fontsize= "1ems"/>{selectedBeer.description}</p>
          </div>
        </div>
          </div>
          
      )}

    </div>
  );
}

export default Foodpairing;
