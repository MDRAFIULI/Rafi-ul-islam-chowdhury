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
import Project1 from './components/ProjectsDetail/Project1/Project1';
import Project2 from './components/ProjectsDetail/Project2/Project2';
import Project3 from './components/ProjectsDetail/Project3/Project3';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/project1' element={<Project1></Project1>}></Route>
        <Route path='/project2' element={<Project2></Project2>}></Route>
        <Route path='/project3' element={<Project3></Project3>}></Route>
      </Routes>
    </div>
  );
}

export default App;
