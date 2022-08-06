import './App.css';
import { BrowserRouter, Link, Route, Routes, Outlet } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Details';
import AboutMe from './pages/AboutMe';
import NotFound from './pages/NotFound';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <nav style={{display: 'flex', flexDirection: 'column'}}>
          <Link to="/home">Home</Link>
          <Link to={"/home/about-me"}>About me</Link>
          <Link to="/detail">Detail</Link>
        </nav>
      </div>
      <Routes>
        <Route path="home" element={<Home />} >
          <Route path="home/about-me" element={<AboutMe />}/>  
        </Route>
        <Route path='/detail' element={<Detail />}/> 
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <div style={{marginTop: 500}}>This is footer</div>
        

    </BrowserRouter>

  );
}

export default App;
