
import { Banner }  from '../components/Banner';
import { Beermenu } from '../components/Beermenu';
import { Bot } from '../components/Bot';
import { Contact } from '../components/Contact';
import { Map } from '../components/Map';
import '../styles/Home.css'

function Home() {
    return (
      <>
      <Banner/>
      <Beermenu/>
      <Bot/>
      <Map/>
      <Contact/>
      </>
    );
  }
  
export default Home;