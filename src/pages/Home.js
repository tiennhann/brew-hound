
import { Banner }  from '../components/Banner';
import { BeerList } from '../components/BeerList';
import { Bot } from '../components/Bot';
import { Contact } from '../components/Contact';
import { Map } from '../components/Map';
import '../styles/Home.css'

function Home() {
    return (
      <>
      <Banner/>
      <BeerList/>
      <Bot/>
      <Map/>
      <Contact/>
      </>
    );
  }
  
export default Home;