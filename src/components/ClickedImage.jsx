import { useContext } from "react";
import { Context } from '../Context';

function ClickedImage(props){
    const { setPictureOpen } = useContext(Context);
    const picture = props.photo;
    const profilePicture = picture.user.profile_image.small;
    const name = picture.user.first_name + " " + picture.user.last_name;
    const avalible = picture.user.for_hire ? "Avalible for hire" : `${picture.user.instagram_username}`;
    const profile = picture.links.portfolio;
    const photoBig = picture.urls.regular; 

    return(
        <div className="cliskedImageContainer">
            <img className="cliskedImageContainerCloseBtn" 
                 src="/close-line.svg" 
                 alt="" 
                 onClick={()=>setPictureOpen({
                    opened: false,
                    picture: {},
                 })}
            />
            <div className="sideDiv">
                <img className="cliskedImageContainerArrowL" src="/arrow-left-s-line.svg" alt="" />
            </div>

            <div className='clickedImageMain'>
                <div className="clickedImageMainHeader">
                    <div className="authDiv">
                        <img className='authPic' src={profilePicture} alt="" />
                        <div className='authInfo'>
                            <h2>{name}</h2>
                            <a target="_blank" href={profile}>{avalible}</a>
                        </div>
                    </div>
                    <div className="buttons">
                        <img src="/heartWhite.svg" alt="" />
                        <img src="shoppingCart.svg" alt="" />
                        <button>Download free</button>
                    </div>
                </div>
                <img className="clickedImageMainPhoto" src={photoBig} alt="" />
            </div>

            <div className="sideDiv">
                <img className="cliskedImageContainerArrowR"  src="/arrow-right-s-line.svg" alt="" />
            </div>
           
        </div>
    );
}

export {ClickedImage }