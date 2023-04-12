import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NftCard from "../Nft-card/NftCard";
import { Collections__DATA } from "../../../assets/data/data";
import PopularTitle from "../../../assets/svg/popular-title.svg"
import PopularSubtitle from "../../../assets/svg/popular-subtitle.svg"


import "./PopularCollections.scss";


const PopularCollections = ()=>{
	return(
		<section style={{ marginTop:'900px'}}>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div>
              <img src={PopularTitle} />
              <img src={PopularSubtitle} />
            </div>
          </Col>
          <div className="row-frame" style={{marginTop:'2670px'}}>
          {Collections__DATA.slice(0, 4).map((item) => (
            <Col lg="2" md="6" sm="3" xs="3" key={item.id} class="col-md-5 col-md-offset-12">
              <NftCard key={item.id} item={item} />
            </Col>
          
          ))}
          </div>
          <div className="row-frame" style={{marginTop:'3200px'}}>
          {Collections__DATA.slice(4, 8).map((item) => (
            <Col lg="2" md="6" sm="3" xs="3" key={item.id} class="col-md-5 col-md-offset-12">
              <NftCard key={item.id} item={item} />
            </Col>
          
          ))}
          </div>
        </Row>
      </Container>
    </section>

		)

}

export default PopularCollections;