import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import Button from 'react-bootstrap/esm/Button';
import { getError } from './utils';
import axios from 'axios';
import StepForm from './component/stepForm';
import auth from './auth';
import Home from './component/home';


function App() {
  
  // const signoutHandler = () => {
  //   localStorage.removeItem('userInfo');
  //   localStorage.removeItem('shippingAddress');
  //   localStorage.removeItem('paymentMethod');
  //   window.location.href = '/signin';
  // };
  // validation
  // if (auth.isAuthenticated()) return <Home />;
	// else return <StepForm />;
  // validation
  
  return (
    <BrowserRouter>
      <div>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center"> All rights reserved @201b153 </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
