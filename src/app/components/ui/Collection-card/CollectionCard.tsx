import React from 'react';
import { Link } from "react-router-dom";
import './CollectionCard.scss'

const CollectionCard = (props: any) => {
  const { title, id, creator, profileImage, img_01, img_02, img_03 } = props.item;
  return (
    <div className="single__collection__card">
      <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={profileImage} alt="" className="w-100" />
          </div>
          <div className="nft__content">
            <h5 className="nft__title">
              <Link to={`/market/${id}`}>{title}</Link>
            </h5>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>
          </div>
          <div className="collection__box">
            <img className= "sm-img" src={img_01}/>
            <img className= "sm-img" src={img_02}/>
            <img src={img_03}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard;