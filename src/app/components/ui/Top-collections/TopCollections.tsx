import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NftCard from "../Nft-card/NftCard";
import { TOP__DATA } from "../../../assets/data/data";
import TopTitle from "../../../assets/svg/top-title.svg"
import TopSubtitle from "../../../assets/svg/top-subtitle.svg"


import "./TopCollections.scss";

const TopCollections = () => {

  return (
    <section style={{ marginTop:'1900px'}}>
      <Container>
        <Row>
        <Col lg="12" className="mb-5">
            <div>
              <img src={TopTitle} />
              <img src={TopSubtitle} />
            </div>
          </Col>
          <div className="row-frame" style={{marginTop:'6170px', marginLeft:'200px'}}>
          {TOP__DATA.slice(0, 3).map((item) => (
            <Col lg="2" md="6" sm="3" xs="3" key={item.id} class="col-md-5 col-md-offset-12">
              <NftCard key={item.id} item={item} />
            </Col>
          
          ))}
          </div>
          
        </Row>
      </Container>
    </section>
  );
};

export default TopCollections;