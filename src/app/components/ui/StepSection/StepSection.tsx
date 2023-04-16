import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import icon from "../../../assets/svg/Icon.svg";
import icon01 from "../../../assets/svg/icon-01.svg";
import icon02 from "../../../assets/svg/icon-02.svg";
import icon03 from "../../../assets/svg/icon-03.svg";
import CreateSell from "../../../assets/svg/create-and-sell.svg"
import RecommendedSubtitle from "../../../assets/svg/recommended-subtitle.svg"



import "./StepSection.scss";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum ",
    icon: icon,
  },

  {
    title: "Create your collection",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum ",
    icon: icon01,
  },

  {
    title: "Add your NFTs",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum ",
    icon: icon02,
  },

  {
    title: "List them for sale",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum ",
    icon: icon03,
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col style={{marginLeft:"50%"}}>
            <img src={CreateSell}/>
            <img src={RecommendedSubtitle}/>
          </Col>
          <div className="set-up">
          {STEP__DATA.map((item, index) => (
            <Col  key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <img src={item.icon}/>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;