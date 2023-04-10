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

          {SELLER__DATA.map((item) => (
            <Col lg="2" md="3" sm="4" xs="6" key={item.id} className="mb-4">
              <div className="single__seller-card d-flex align-items">
                <div className="seller__img">
                  <img src={item.sellerImg} alt="" className="mw-150" />
                </div>

                <div className="seller__content">
                  <h6>{item.sellerName}</h6>
                  <h6>{item.currentBid} ETH</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;