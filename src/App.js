import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Error from './Pages/Error/Error';
import Header from './Components/Header/Header';
import OrderReview from './Components/OrderReview/OrderReview';
import Shop from './Pages/Shop/Shop';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Order from './Pages/Order/Order';
import Footer from './Components/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UserOrders from './Pages/Dashboard/UserOrders/UserOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/detail/:id' element={<PrivateRoute><ProductDetail /> </PrivateRoute>}></Route>
            <Route path='/orderreview' element={<OrderReview />}></Route>
            <Route path='/userorders' element={<UserOrders />}></Route>
            <Route path='/order' element={<PrivateRoute> <Order /></PrivateRoute>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>
          <Footer></Footer>

        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
