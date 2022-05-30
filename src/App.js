import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Tools from './Pages/Home/Tools/Tools';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './Pages/Shared/Navbar/Navbar';
import Dashboard from './Pages/Home/Tools/Dashboard/Dashboard';
import MyOrder from './Pages/Home/Tools/Dashboard/MyOrder';
import MyReview from './Pages/Home/Tools/Dashboard/MyReview';
import Footer from './Pages/Shared/Footer/Footer';
import Products from './Pages/Products/Products';
import MyProfile from './Pages/Home/Tools/Dashboard/MyProfile';
import NotFound from './Pages/Shared/NotFound/NotFound';
import About from './Pages/About/About';
import MyProtfolio from './Pages/Protfolio/MyProtfolio';
import Users from './Pages/Home/Tools/Dashboard/Users';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/myprotfolio' element={<MyProtfolio></MyProtfolio>}></Route>
       <Route path='/tools' element={
         <RequireAuth>
           <Tools></Tools>
         </RequireAuth>
       }></Route>
       
       <Route path='/products' element={
         <RequireAuth>
           <Products></Products>
         </RequireAuth>
       }></Route>
       <Route path='/dashboard' element={
         <RequireAuth>
           <Dashboard></Dashboard>
         </RequireAuth>
       }>
         <Route index element ={<MyOrder></MyOrder>} ></Route>
         <Route path='review' element ={<MyReview></MyReview>} ></Route>
         <Route path='profile' element ={<MyProfile></MyProfile>} ></Route>
         <Route path='users' element ={<Users></Users>} ></Route>
       </Route>
       <Route path='/footer' element={<Footer></Footer>}></Route>
       <Route path='*' element={ <NotFound></NotFound>}></Route>
     </Routes>
    
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
