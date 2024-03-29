import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodBeerPic from '../assets/img/foodparing.jpeg';
import BeerMenu from '../components/Beermenu';
import '../styles/Beer.css';
//ternary operator used in classname to dynamically change what is visible on the page
//what is visible is changed using the radio button and the useState functions
//The names are the opposite of what they stand for i.e. displayContent hides conent and notDisplay displays content

function Foodpairing() {
  const [radioValue, setRadioValue] = useState('2');
  const [infographic, setInfographic] = useState(true);
  const [menu, setMenu] = useState(false);

  const radios = [
    { name: 'Beer Menu', value: '2' },
    { name: 'Food and Beer Pairing', value: '1' },
    
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
              style={
                radioValue === radio.value
                  ? { backgroundColor: 'orange', color: 'black', borderColor: 'white'}
                  : { backgroundColor: 'black', color: 'white', borderColor: 'white' }
              }
              >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <img src={FoodBeerPic} className={ infographic ? 'displayContent' : 'notDisplay infographic' }/>
      
      <div className={ menu ? 'displayContent' : 'notDisplay' }>
        
        <BeerMenu />
      </div>

      
    </>
  );
}

export default Foodpairing;
