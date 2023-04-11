import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NftCard from "../Nft-card/NftCard";
import { NFT__DATA } from "../../../assets/data/data";
import ExploreTitle from "../../../assets/svg/explore-title.svg"
import ExploreSubtitle from "../../../assets/svg/explore-subtitle.svg"


import "./ExploreArt.scss";

const ExploreArt = () => {
  const navigate = useNavigate();
  const routeMarket =() =>{
    navigate("/market")

  }
  return (
    <section style={{ marginTop:'900px'}}>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div>
              <img src={ExploreTitle} />
              <img src={ExploreSubtitle} />
              <span>
                <button className="explore-btn" onClick={routeMarket}>Explore more</button>
              </span>
            </div>
          </Col>
          <Row>
          {NFT__DATA.slice(0, 4).map((item) => (
            <Col lg="8" md="6" sm="3" xs="3" key={item.id} class="col-md-5 col-md-offset-12">
              <NftCard key={item.id} item={item} />
            </Col>
          ))}
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default ExploreArt;