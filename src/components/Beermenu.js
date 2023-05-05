import React, { useState } from "react";
import { BeerMenuList } from "../helpers/BeerMenuList";
import BeerItem from "../components/BeerItem";
import "../styles/Beer.css";
import { motion } from "framer-motion";
import "../styles/Modal.css";
import { BiDrink } from 'react-icons/bi';
import { MdOutlineSubtitles, MdPercent } from 'react-icons/md';
/*website for icons: https://react-icons.github.io/react-icons/icons?name=md */

function BeerMenu() {
  const [modal, setModal] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState(null);
  const num = 1;

  const toggleModal = (beer) => {
    setSelectedBeer(beer);
    setModal(!modal);
  };

  return (
    <div className="beerMenu">
      <h1 className="beerMenuTitle"> Beer Menu </h1>
      <motion.div className="beerMenuList">
        {BeerMenuList.map((beerItem, key) => {
          return (
            <div onClick={() => toggleModal(beerItem)} key={key}>
              <BeerItem
                image={beerItem.image}
                name={beerItem.name}
                ABV={beerItem.ABV}
                description={beerItem.description}
                index = {beerItem.index}
              />
              
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default BeerMenu;