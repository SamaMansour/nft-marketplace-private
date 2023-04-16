import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NftCard from "../Nft-card/NftCard";
import { NFT__DATA } from "../../../assets/data/data";
import RecommendedTitle from "../../../assets/svg/recommended-title.svg"
import RecommendedSubtitle from "../../../assets/svg/recommended-subtitle.svg"


import "./RecommendedArt.scss";

const RecommendedArt = () => {
  
  return (
    <section className="recommended-section" style={{ marginTop:'900px', height:"800px", paddingTop:"5px", opacity:"0.7"}}>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div>
              <img src={RecommendedTitle} />
              <img src={RecommendedSubtitle} />    
            </div>
          </Col>
          <div className="row-frame" style={{marginTop:'6870px', height:"600px"}}>
          {NFT__DATA.slice(0, 4).map((item) => (
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

export default RecommendedArt;