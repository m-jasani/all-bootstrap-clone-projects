import logo from './logo.svg';
import './App.css';
import Comp from './component/comp';
import Nav from './component/nav';
import Scr2 from './component/scr2';
import Hex from './component/hex';
// import Cursor from './component/cursor1';
import CircleFollowCursor from'./component/cursor'

function App() {
  return (
    <div className="App">
      {/* <Comp/> */}
      {/* <Cursor/> */}
      <CircleFollowCursor/>
      <Nav/>
      <Scr2/>
      <Hex/>
    </div>
  );
}

export default App;
