import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landing from './src/pages/landing/Landing';
import Login from './src/pages/Auth/Login';
import Product from './src/pages/productDetails/Product';
import Payment from './src/pages/payment/Payment';
import Cart from './src/pages/Cart/Cart';
import Results from './src/pages/results/Results';
import Order from './src/pages/order/Order';
const Routering = () => {
  return (
       <BrowserRouter>
            <Routes>
                <Route path='' element={<Landing />}/>
                <Route path='Auth' element={<Login />}/>
                <Route path='order' element={<Order />} />
                <Route path='payment' element={<Payment />} />
                <Route path='category/:categoryName' element={<Results />} />
                <Route path='products/:productId' element={<Product />} />
                <Route path='cart' element={<Cart />} />
            </Routes>
       </BrowserRouter> 
  )
}

export default Routering;