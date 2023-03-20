

function ClickedImage(props){
    const picture = props.photo;
    console.log( picture);
    return(
        <div className="cliskedImageContainer">
            <img className="cliskedImageContainerCloseBtn" src="/close-line.svg" alt="" />
            <div className="sideDiv">
                <img className="cliskedImageContainerArrowL" src="/arrow-left-s-line.svg" alt="" />
            </div>

            <div className='clickedImageMain'>

            </div>

            <div className="sideDiv">
                <img className="cliskedImageContainerArrowR"  src="/arrow-right-s-line.svg" alt="" />
            </div>
           
        </div>
    );
}

export {ClickedImage }