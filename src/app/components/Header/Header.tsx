import react from "react";
import { Link } from "react-router-dom";
import './Header.scss'
import Logo from "../../assets/images/Logo.png"
import SwitchButton from '../../components/Switch/Switch';
import Dropdown from "../Dropdown/Dropdown";
import Search from "../Search/Search"

const Header = () => {
    return (
      <div id="base">
        <div id="header">
        <Link to='/' id='logo'><img src={Logo} /></Link>
        <div style={{marginLeft:"62px"}}id="navigation">
          <a>Home</a>
          <a >Marketplace</a>
          <a>Community</a>
          <a>Activity</a>
          <a>Blog</a>
          <Dropdown/>
        </div>
        <div className="search">
          <Search/>
        </div>
        <div id="call-to-action">
          <SwitchButton/>
          <button type="button" className="connect-wallet" >Connect Wallet</button>
        </div>
      </div>
    </div>
    );
}

export default Header;