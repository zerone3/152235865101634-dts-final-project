// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './container/Home';
import Product from './container/Product';
import Service from './container/Service';
import SignUp from './container/SignUp';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
