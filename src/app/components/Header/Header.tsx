import react from "react";
import { Link } from "react-router-dom";
import '../../styles/Header.css'
import Logo from "../../assets/images/Logo.png"
import SwitchButton from '../../components/Switch/Switch';

const Header = () => {
    return (
      <div id="base">
        <div id="header">
        <Link to='/' id='logo'><img src={Logo} /></Link>
        <div id="navigation">
          <a className="link" href="#">Home</a>
          <a className="link" href="#">Marketplace</a>
          <a className="link" href="#">Community</a>
          <a className="link" href="#">Activity</a>
          <a className="link" href="#">Blog</a>
        </div>
        <div id="call-to-action">
          <SwitchButton/>
          <button id="connect-wallet" >Connect Wallet</button>
        </div>
      </div>
    </div>
    );
}

export default Header;