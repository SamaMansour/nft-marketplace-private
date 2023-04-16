import React from "react";
import "./SellerSection.scss";
import { Container, Row, Col } from "reactstrap";
import { SELLER__DATA } from "../../../assets/data/data";
import TopCreator from '../../../assets/svg/top-creator.svg'
import SellerSectionSubtitle from "../../../assets/svg/seller-section-subtitle.svg"

const SellerSection = () => {
  return (
    <section className="seller-section">
      <Container>
        <Row>
            <div className="seller__section-title">
              <img src={TopCreator} />
              <img src={SellerSectionSubtitle}/>
            </div>
        
          <div className="row-frame" style={{marginRight:'10%'}}>
          {SELLER__DATA.slice(0, 4).map((item) => (
            <>
           
            <div className="single__seller-card col-md-5 col-md-offset-2" style={{ marginLeft:'40px'}}>
              <div >
                <img src={item.sellerImg} alt=""  style={{borderRadius:'50%'}}/>
              </div>

              <div className="seller__content">
                <h6>{item.sellerName}</h6>
                <h6>{item.currentBid} ETH</h6>
              </div>
            </div>
        
          
            </>
          ))}
          </div>
          <div className="row-frame" style={{marginTop:'200px', marginRight:'10%'}}>
          {SELLER__DATA.slice(0, 4).map((item) => (
            <>
           
            <div className="single__seller-card col-md-5 col-md-offset-2" style={{ marginLeft:'40px'}}>
              <div >
                <img src={item.sellerImg} alt=""  style={{borderRadius:'50%'}}/>
              </div>

              <div className="seller__content">
                <h6>{item.sellerName}</h6>
                <h6>{item.currentBid} ETH</h6>
              </div>
            </div>
        
          
            </>
          ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;