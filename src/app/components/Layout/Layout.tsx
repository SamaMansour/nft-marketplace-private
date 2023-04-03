import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Routes, Route, BrowserRouter} from "react-router-dom";

import Signup from "../../pages/signup";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
      
				<Routes>
					<Route path='/' element={<Signup/>}/>
				</Routes>
		
      </div>
      <Footer />
    </div>
  );
};

export default Layout;