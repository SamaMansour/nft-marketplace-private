import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"

import Signup from "../../pages/signup";
import Login from "../../pages/login";
import ForgotPassword from "../../pages/forgotPassword";
import Home from "../../pages/Home";
const Layout = () => {
  return (
    <div>
      <Header />
      <div>
				<Routes>
          <Route path='/' element={<Home/>}/>
					<Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
				</Routes>
      </div>
      <div style={{ marginTop:'1117px'}}>
      <ScrollToTop/>
      <Footer />
      </div>
    </div>
  );
};

export default Layout;