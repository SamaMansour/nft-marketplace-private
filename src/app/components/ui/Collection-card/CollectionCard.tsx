import React from 'react';
import { Link } from "react-router-dom";
import './CollectionCard.scss'

const CollectionCard = (props: any) => {
  const { title, id, creator, profileImage, imgUrl } = props.item;
  return (
    <div className="single__nft__card">
       <div className="nft__content">
       

       <div className="creator__info-wrapper d-flex gap-3">
         <div className="creator__img">
           <img src={profileImage} alt="" className="w-100" />
         </div>

         <div className="creator__info w-100 d-flex align-items-center justify-content-between">
           <div>
             <h6>Created By</h6>
             <p>{creator}</p>
              <h5 className="nft__title">
                 <Link to={`/market/${id}`}>{title}</Link>
               </h5>
           </div>
         </div>
       </div>
      <div className="nft__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div> 
      </div>
    </div>
  );
 
}

export default CollectionCard;