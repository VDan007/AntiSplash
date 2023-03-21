import { useContext , useEffect, useState} from "react";
import { Context } from '../Context';
import { Photo } from './Photo';

function ClickedImage(props){
    const { setPictureOpen } = useContext(Context);
    const picture = props.photo;
    const profilePicture = picture.user.profile_image.small;
    const name = picture.user.first_name + " " + picture.user.last_name;
    const avalible = picture.user.for_hire ? "Avalible for hire" : `${picture.user.instagram_username}`;
    const profile = picture.links.portfolio;
    const userName = picture.user.username;
    const [morePictures,setMorePictures] = useState([]);
    const photoBig = picture.urls.regular; 


    //client_id=aDoVNz0oe4OyiTv3FvuO3tOGZye5kVhJuZEUwcmsj7A

    useEffect(
        ()=>{
            /////get more info
            fetch(`https://api.unsplash.com/photos/${picture.id}?client_id=aDoVNz0oe4OyiTv3FvuO3tOGZye5kVhJuZEUwcmsj7A`)
            .then(data=>data.json())
            .then(data=>console.log(data))

            ////get additional pictures
            fetch(`https://api.unsplash.com/users/${userName}/photos?per_page=33&client_id=aDoVNz0oe4OyiTv3FvuO3tOGZye5kVhJuZEUwcmsj7A`)
            .then(data=>data.json())
            .then(data=>setMorePictures(data));
        },[picture]
    );

    const morePicturesToRender = morePictures.map(
        pic=>{
            return <Photo
                    data={pic}
                    key = {pic.id} 
                   />
        }
            
    );

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
            <div className="sideDivL">
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

                <dir className='clickedImageDescriptionDiv'>

                </dir>

                <div className="clickedImageMorePicturesDiv">
                    {morePicturesToRender}
                </div>
            </div>

            <div className="sideDivR">
                <img className="cliskedImageContainerArrowR"  src="/arrow-right-s-line.svg" alt="" />
            </div>
           
            
        </div>
    );
}

export {ClickedImage }