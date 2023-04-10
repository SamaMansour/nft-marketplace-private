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
          <Col lg="12" className="mb-5">
            <div className="seller__section-title">
              <img src={TopCreator} />
              <img src={SellerSectionSubtitle}/>
            </div>
            </Col>

          {SELLER__DATA.map((item) => (
            
            <Col md="6" sm="3" xs="3" key={item.id}>
              <div className="single__seller-card d-flex align-items-center gap-3">
                <div className="seller__img">
                  <img src={item.sellerImg} alt=""  />
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