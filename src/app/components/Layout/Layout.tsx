import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"

import Signup from "../../pages/signup";
import Login from "../../pages/login";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
				<Routes>
					<Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
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