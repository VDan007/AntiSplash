import { useContext , useEffect, useState} from "react";
import { Context } from '../Context';
import { Photo } from './Photo';

function ClickedImage(props){
    const { setPictureOpen } = useContext(Context);
    const [morePictures,setMorePictures] = useState([]);
    const [moreInfo,setMoreInfo] = useState({
        downloads: '',
        description: '',
        location: '',
        views: '',
        created_at: '',
        user:{
            links:{
                html: ''
            }
        },
        exif:{
            make: '',
            model: '',
        },
        license: '',
    });
    console.log(moreInfo);
    const picture = props.photo;
    const profilePicture = picture.user.profile_image.small;
    const name = picture.user.first_name + " " + picture.user.last_name;
    const avalible = picture.user.for_hire ? "Avalible for hire" : `${picture.user.instagram_username}`;
    let profile = moreInfo.user.links.html;
    const userName = picture.user.username;
    const photoBig = picture.urls.regular; 
    let views = moreInfo.views;
    let downloads = moreInfo.downloads;
    let location = moreInfo.location.name;
    let pusblished = moreInfo.created_at.slice(0,10);
    let camera = moreInfo.exif.make + ',' + moreInfo.exif.model;
    let description = moreInfo.description;
    
   //console.log(profile);

    

    useEffect(
        ()=>{
            /////get more info
            fetch(`https://api.unsplash.com/photos/${picture.id}?client_id=aDoVNz0oe4OyiTv3FvuO3tOGZye5kVhJuZEUwcmsj7A`)
            .then(data=>data.json())
            .then(data=>setMoreInfo(data))

            ////get additional pictures
            fetch(`https://api.unsplash.com/users/${userName}/photos?per_page=33&client_id=aDoVNz0oe4OyiTv3FvuO3tOGZye5kVhJuZEUwcmsj7A`)
            .then(data=>data.json())
            .then(data=>setMorePictures(data));
            ////upscroll
            
        },[]
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
                <img className="clickedImageContainerArrowL" src="/arrow-left-s-line.svg" alt="" />
            </div>
            <div className="sideDivR">
                <img className="clickedImageContainerArrowR"  src="/arrow-right-s-line.svg" alt="" />
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
                    <div className="headerButtonDiv">
                        <img src="/heartWhite.svg" alt="" />
                        <img src="shoppingCart.svg" alt="" />
                        <button>Download</button>
                    </div>
                </div>
                <img className="clickedImageMainPhoto" src={photoBig} alt="" />

                <dir className='clickedImageDescriptionDiv'>
                    <div className='viewsRow'>
                        <div className='viewsRowDiv1'>
                            <h3>Views</h3>
                            <p>{views}</p>
                        </div>
                        <div className='viewsRowDiv1'>
                            <h3>Downloads</h3>
                            <p>{downloads}</p>
                        </div>
                        <div className='viewsRowDiv1'>
                            <h3>Featured in</h3>
                            <p>Editorial</p>
                        </div>
                        <div className='viewsRowDivBtnsContainer'>
                            <button>Share</button>
                            <button>Info</button>
                            <button>...</button>
                        </div>
                    </div>
                    <div className='pictureAdditionalInfo'>
                        <div>
                            <p>{location}</p>
                            <p>Published on: {pusblished}</p>
                            <p>{camera}</p>
                            <p>Free to use under the Unsplash License</p>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                    </div>
                        
                    <h2 className="relatedPhotosH2">Related  photos</h2>
                </dir>
                <div className="clickedImageMorePicturesDiv">
                    {morePicturesToRender}
                </div>
            </div>

            
           
            
        </div>
    );
}

export {ClickedImage }