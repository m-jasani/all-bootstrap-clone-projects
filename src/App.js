import logo from './logo.svg';
import './App.css';
import './css/nav.css'
import Nav from './component/Nav';
import Scr1 from './component/scr1';
import Scr2 from './component/scr2';
import Scr3 from './component/scr3';
import Scr4 from './component/scr4';
import Scr5 from './component/scr5';
import Footer from './component/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Scr1/>
      <Scr2/>
      <Scr3/>
      <Scr4/>
      <Scr5/>
      <Footer/>
    </div>
  );
}

export default App;
