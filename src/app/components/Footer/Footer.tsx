import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./Footer.scss";
import LogoInfo from "../../assets/images/LogoInfo.png"
import { Link } from "react-router-dom";
import Join from "../../assets/svg/join-our-community.svg"
import BackToTop from "../../assets/svg/Back To Top.svg"

const Support = [
  {
    display: "Community",
    url: "/seller-profile",
  },
  {
    display: "Guidline",
    url: "/create",
  },
  {
    display: "Chat With us",
    url: "/market",
  },
 
];

const Company = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "FAQ",
    url: "#",
  },
  {
    display: "Marketplace",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const Explore = [
  {
    display: "Art",
    url: "#",
  },
  {
    display: "Collection",
    url: "#",
  },
  {
    display: "Creator/Owner",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="join-container">
        <div>
          <img src= {Join}/>
        </div>
        <div>
          <p className="subtext"> Meet the Known Origin team, artists and collectors for platform updates, announcements, and more...</p>
        </div>
          <form>
              <input className= "input-subscribe" type='email' placeholder='Email'/>
              <button className="btn-subscribe" type="submit">Subscribe</button>
          </form>
      </div>
      <div className="logo-info">
        <img src={LogoInfo}/>
      </div>
      <div className="item-lists">
      <h5>Support</h5>
            <ListGroup className="list__group">
              {Support.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
      </div>
      <div className="item-lists" style={{marginLeft:'238px'}}>
      <h5>Company</h5>
            <ListGroup className="list__group">
              {Company.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
      </div>
      <div className="item-lists" style={{marginLeft:'549px'}}>
      <h5>Explore</h5>
            <ListGroup className="list__group">
              {Explore.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
      </div>
      <div className="copyright">
        <p> ©2022 Larcible. All Right reserved</p>
        
          <p>Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms of Service</p>
      </div>  
    </footer>
  );
};

export default Footer;