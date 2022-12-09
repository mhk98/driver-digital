import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SlideShow from './News/SlideShow';
import Team from './Team/Team';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/team' element={<Team></Team>}></Route>
        <Route path='/news' element={<SlideShow></SlideShow>}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
