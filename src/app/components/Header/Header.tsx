import react from "react";
import { Link } from "react-router-dom";
import '../../styles/Header.css'

const Header = () => {
    return (
        <div id="header">
        <Link to='/' id='logo'>NFT Room</Link>

        <div id="link-containers">
          <a>Home</a>
          <a>Marketplace</a>
          <a>Community</a>
          <a>Activity</a>
          <a>Blog</a>


          <button id="connect-wallet" >Connect Wallet</button>
        </div>
      </div>
    );
}

export default Header;