import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Static from './component/Static';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Static/>
      <Navbar/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
