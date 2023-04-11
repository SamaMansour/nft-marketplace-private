import React from 'react'
import NftCard from '../Nft-card/NftCard';
import { NFT__DATA } from "../../../assets/data/data";
import { Container, Row, Col } from "reactstrap";
import LiveArtTitle from "../../../assets/svg/live-art-title.svg"
import LiveArtSubtitle from "../../../assets/svg/live-art-subtitle.svg"
import ArtDetails from "../../../assets/images/Art Details.png"
import './LiveArt.scss'



const LiveArt = () => {
  return (
    <div className='live_art__section'>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__art-title">
              <img src={LiveArtTitle} />
              <img src={LiveArtSubtitle}/>
            </div>
            </Col>
            <div className='art-collection'>
              <div className='art-box' style={{width:'80%'}}>
              
                {NFT__DATA.slice(0, 1).map((item) => (
                      
                  <NftCard key={item.id} item={item} />
                ))
              }
            </div>
            <div className='art-details'>
             <img src={ArtDetails}/>
            </div>
         
          </div>
          </Row>
        </Container>
      </div>
  )
}

export default LiveArt