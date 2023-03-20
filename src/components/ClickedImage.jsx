

function ClickedImage(props){
    const picture = props.photo;
    console.log( picture);

    const profilePicture = picture.user.profile_image.small;
    const name = picture.user.first_name + " " + picture.user.last_name;
    const avalible = picture.user.for_hire ? "Avalible for hire" : `${picture.user.instagram_username}`;
    const profile = picture.links.portfolio;

    return(
        <div className="cliskedImageContainer">
            <img className="cliskedImageContainerCloseBtn" src="/close-line.svg" alt="" />
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
                </div>
            </div>

            <div className="sideDiv">
                <img className="cliskedImageContainerArrowR"  src="/arrow-right-s-line.svg" alt="" />
            </div>
           
        </div>
    );
}

export {ClickedImage }