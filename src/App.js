import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import  Home  from './pages/Home';
import Foodpairing from './pages/Foodpairing'
import BeerBot from './pages/BeerBot';
import Breweries from './pages/Breweries';
import Ride from './pages/Ride';
import MoreInfo from './pages/MoreInfo';
import ScrollToTop from './helpers/ScrollToTop';

function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
        <NavBar/>
          <Routes>
            <Route index element = {<Home/>} />
            <Route exact path="/home"  element={<Home/>} />
            <Route path="/pairing"  element={<Foodpairing />} />
            <Route path="/beerBot"  element={<BeerBot />} />
            <Route path="/breweries" element={<Breweries/>} />
            <Route path="/ride" element={<Ride/>} />
            <Route path="/moreInfo/:id" element={<MoreInfo/>} />
          </Routes>
        <Footer/>
        </ScrollToTop>
      </Router>
      
    </div>
  );
}

export default App;
