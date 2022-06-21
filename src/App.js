import logo from './logo.svg';
import './App.css';
import Nav from './components/shared/Nav/Nav';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import MyProjects from './components/MyProjects/MyProjects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      {/* <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/banner#about' element={<About></About>}></Route>
        <Route path='/banner#skills' element={<Skills></Skills>}></Route>
        <Route path='/banner#myProjects' element={<MyProjects></MyProjects>}></Route>
        <Route path='/banner#contact' element={<Contact></Contact>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
