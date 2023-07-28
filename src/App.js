
import './App.css';
import Nav from './component/Nav';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
// import Footer from './component/Footer';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Privatecomponent from './component/Privatecomponent';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';
import UpdateChoose from './component/UpdateChoose';
import Profile from './component/Profile';
function App() {
  return (
    <div className="App bg-dark text-white">

      <Router>

      <Nav/>
      <Routes>

          {/* Private compoenent--- */}
        <Route element={<Privatecomponent/>}>
        <Route path='/' element={<ProductList/>} />
        <Route path='/add' element={<AddProduct/>} />
        <Route path='/update/:id' element={<UpdateProduct/>} />
        <Route path='/update/' element={<UpdateChoose/>} />
        <Route path='/logout' element={<h1>logout product component</h1>} />
        <Route path='/profile' element={<Profile/>} />
        </Route>
          {/* Private compoenent--- */}

       
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>


      </Router>
      {/* <Footer/> */}
  
     
    </div>
  );
}

export default App;
