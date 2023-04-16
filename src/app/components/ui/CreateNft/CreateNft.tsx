import React from 'react';
import './CreateNft.scss';
import TitleCreate from "../../../assets/svg/title-create.svg";
import SubtitleCreate from "../../../assets/svg/subtitle-create.svg";
import ArtImage from "../../../assets/svg/art-image.svg";
import './CreateNft.scss';


const CreateNft = ()=>{
	return(
		<div className="nft__info" style={{ marginTop:'4900px', height:"500px", marginRight:"10%", borderRadius:"48px", paddingLeft:"2%", opacity:"0.7"}}>
			<div>
				<h3>Create your NFT's & Sell Your NFT at one palce</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>when an unknown printer took.</p>
			</div>
			<div className='art__img'>
				<img src={ArtImage}/>
			</div>
		</div>

		)

}

export default CreateNft;