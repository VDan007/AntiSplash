import { useContext , useEffect, useState, useRef} from "react";
import { Context } from '../Context';
import { Photo } from './Photo';
import { CollectionCard } from "./CollectionCard";
import { ButtonWithDropdownList } from './ButtonWithDropdownList'



function ClickedImage(props){
    const { setPictureOpen,pictures,pictureOpen,setPhotoPages,likedPictures, toggleFavorite } = useContext(Context);

    // console.log( 'pictures' + pictures[0].id);
    // console.log( 'openedPicture' + pictureOpen.picture.id);
    // console.log( pictures.indexOf(pictures.find(pic=>pic.id=== pictureOpen.picture.id)) );
   

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
        related_collections:{
            
        }
    });
    const [dropdownOpen,setDropdownOpen] = useState(false);
    const picture = props.photo;
    
    const profilePicture = picture.user.profile_image.small;
    const name = picture.user.first_name + " " + picture.user.last_name;
    const avalible = picture.user.for_hire ? "Avalible for hire" : `${picture.user.instagram_username}`;
    const profile = moreInfo.user.links.html;
    const userName = picture.user.username;
    const photoBig = picture.urls.regular; 
    const views = moreInfo.views;
    const downloads = moreInfo.downloads;
    const location = moreInfo.location.name;
    const pusblished = moreInfo.created_at.slice(0,10);
    const camera = moreInfo.exif.make + ',' + moreInfo.exif.model;
    const description = moreInfo.description;
    const collettionsToRender = moreInfo.related_collections.results ?
    moreInfo.related_collections.results.map(
                collection => <CollectionCard
                                collection={collection}
                                key={collection.id}

                              />
            )
            :
            '';
    const dropdownMenuRef = useRef(null);
    const isItLiked = likedPictures.every(item=>item[1].id !== picture.id) ?
          false :
          true;
   
    
    

    

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
            
            ////getcollections

           
            
        },[pictureOpen]
    );

    const morePicturesToRender = morePictures.map(
        pic=>{
            return <Photo
                    data={pic}
                    key = {pic.id} 
                   />
        }
            
    );

    useEffect(
        ()=>{
            window.addEventListener('mousedown', elseClickHandler)
            return ()=> window.removeEventListener('mousedown', elseClickHandler)
        }
    );


   function dropdownToggle(){
        setDropdownOpen(prev=>!prev);    
   }

   
   function elseClickHandler(e){
        if(dropdownMenuRef.current && e.target.innerText != 'Close' && !dropdownMenuRef.current.contains(e.target)){

            setDropdownOpen(false); 
        } 
   }

  
   function handloOnArrowClick(e){
        const lengthOfLoadedPictureArray = pictures.length;
        const IndexOfOpenedPicture = pictures.indexOf(pictures.find(pic=>pic.id=== pictureOpen.picture.id));

        if(lengthOfLoadedPictureArray -2 == IndexOfOpenedPicture){
            setPhotoPages(prev=>prev+1);
        }

        if(IndexOfOpenedPicture && e.target.classList.contains('clickedImageContainerArrowL')){
            setPictureOpen(prev=>{ 
                return{...prev,
                        picture: pictures[IndexOfOpenedPicture -1]}
            });

        } else if(e.target.classList.contains('clickedImageContainerArrowR')){
            
            setPictureOpen(prev=>{ 
                return{...prev,
                        picture: pictures[IndexOfOpenedPicture +1]}
            });
        }
   }
  
                                

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
                <img 
                    className="clickedImageContainerArrowL" 
                    src="/arrow-left-s-line.svg" 
                    alt=""
                    onClick={handloOnArrowClick}
                />
            </div>
            <div className="sideDivR">
                <img 
                    className="clickedImageContainerArrowR"  
                    src="/arrow-right-s-line.svg" 
                    alt="" 
                    onClick={handloOnArrowClick}
                />
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
                    <img onClick={()=>toggleFavorite(picture.id)} 
                                                src= {isItLiked ? "/heartRed.svg": "/heartWhite.svg"}
                                                className="heartImg" 
                                                alt="" 
                                              />
                   
                        
                        <button
                            onClick={dropdownToggle}
                        >  {dropdownOpen ? 'Close' : 'Download'}
                        </button>
                       {dropdownOpen && <div className='headerButtonDropdown' 
                                             ref={dropdownMenuRef}
                                        >
                            <a target='_blank' href={profile}>Small</a>
                            <a target='_blank' href={profile}>Medium</a>
                            <a target='_blank' href={profile}>Large</a>
                            <a target='_blank' href={profile}>Original</a>
                        </div>}
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
                            
                            <ButtonWithDropdownList
                                text='Share'
                                content="shareList"
                            />
                            <ButtonWithDropdownList
                                text='Info'
                                content="info"
                            />
                            <ButtonWithDropdownList
                                text='...'
                                content="report"
                            />
                        </div>
                    </div>
                    <div className='pictureAdditionalInfo'>
                        <div>
                            {location && <div className='additionalInfoSubDiv'> 
                                <img src='/map-pin-line.svg'/>
                                <p>{location}</p>
                            </div>}
                            {pusblished && <div className='additionalInfoSubDiv'> 
                                <img src='/calendar-line.svg'/>
                                <p>Published on: {pusblished}</p>
                            </div>}
                            {camera && <div className='additionalInfoSubDiv'> 
                                <img src='/camera-line.svg'/>
                                <p>{camera}</p>
                            </div>}
                            <div className='additionalInfoSubDiv'> 
                                <img src='/shield-check-line.svg'/>
                                <p>Free to use under the Unsplash License</p>
                            </div>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                    </div>
                    
                </dir>
                <h2 className="relatedCollectionsTitle">Related  photos</h2>
                <div className="clickedImageMorePicturesDiv">
                    {morePicturesToRender}
                </div>
                <div>
                    
                </div>
                <h2 className="relatedCollectionsTitle">Related collections</h2>
                <div className="collectionsDiv">
                    {collettionsToRender}
                </div>
                <div className="mainEnd"></div>
            </div>
            
            
           
            
        </div>
        
    );
}

function scroll(){
    if(document.getElementsByClassName('cliskedImageContainer')[0]){
        document.getElementsByClassName('cliskedImageContainer')[0].scroll(0,0);   
    }
}

export {ClickedImage, scroll }