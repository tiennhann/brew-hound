import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodBeerPic from '../assets/img/foodparing.jpeg';
import BeerMenu from '../components/Beermenu';
import '../styles/Beer.css';

function Foodpairing() {
  const [radioValue, setRadioValue] = useState('2');
  const [infographic, setInfographic] = useState(true);
  const [menu, setMenu] = useState(false);

  const radios = [
    { name: 'Food and Beer Pairing', value: '1' },
    { name: 'Beer Menu', value: '2' },
  ];
  console.log("Menu: " + menu);
  console.log("infographic: " + infographic);
  return (
    <>
      
      <div className="buttonPadding">
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
              size = {'lg'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => {
                setRadioValue(e.currentTarget.value);
                setInfographic(!infographic);
                setMenu(!menu);
              }}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <img src={FoodBeerPic} className={ infographic ? 'displayContent' : 'notDisplay'  }/>
      
      <div className={ menu ? 'displayContent' : 'notDisplay' }>
        
        <BeerMenu />
      </div>

      
    </>
  );
}

export default Foodpairing;
