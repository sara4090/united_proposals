import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home';
import NavBar from './Components/Main/NavBar';
import Footer from './Components/Main/Footer';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Hall from './Components/Pages/Hall';
import Caterers from './Components/Pages/Caterers';
import RentCar from './Components/Pages/RentCar';
import Decoration from './Components/Pages/Decoration';
import EventPlanner from './Components/Pages/EventPlanner';
import Boutique from './Components/Pages/Boutique';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';


function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/hall' element={<Hall />} />
          <Route exact path='/caterers' element={<Caterers />} />
          <Route exact path='/car_rent' element={<RentCar />} />
          <Route exact path='/decoration' element={<Decoration />} />
          <Route exact path='/event_planner' element={<EventPlanner />} />
          <Route exact path='/boutique' element={<Boutique />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />

        </Routes>
        <Footer />
      </Router>




    </div>
  );
}

export default App;
