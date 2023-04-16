import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CollectionCard from "../Collection-card/CollectionCard";
import { Collections__DATA } from "../../../assets/data/data";
import PopularTitle from "../../../assets/svg/popular-title.svg"
import PopularSubtitle from "../../../assets/svg/popular-subtitle.svg"


import "./PopularCollections.scss";


const PopularCollections = ()=>{
	return(
		<section style={{ marginTop:'1500px'}}>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div>
              <img src={PopularTitle} />
              <img src={PopularSubtitle} />
            </div>
          </Col>
          <div className="row-frame" style={{marginTop:'4170px', marginLeft:'200px'}}>
          {Collections__DATA.slice(0, 3).map((item) => (
            <Col lg="3" key={item.id} class="col-md-5 col-md-offset-12">
              <CollectionCard key={item.id} item={item} />
            </Col>
          
          ))}
          </div>
        </Row>
      </Container>
    </section>

		)

}

export default PopularCollections;