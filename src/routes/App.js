import '../App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home.jsx'
import Menu from '../pages/Home/components/MenuDaily/MenuDaily';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/Alkemy-MenuApp' element={<Login />}/>
          <Route path='/Alkemy-MenuApp/home' element={<Home />}/>
          <Route path='/Alkemy-MenuApp/home/menudaily' element={<Menu />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


