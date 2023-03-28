
import { useContext } from 'react';
import { Context } from '../Context';

function PopUp(){
    const {setShowPopUp} = useContext(Context);
    return(
        <div className="popUpDiv">
            <h1>Wellcome!</h1>
            <h2>
                This is a practice project based on <a target='_blank' href="https://unsplash.com/">unsplash.com</a>.
                My intention is to practice, experiment, not to 
                monotize or launch this site at scale. 
                All of the images are provided by the <a target='_blank' href="https://unsplash.com/developers">unsplash API</a>
            </h2>
            <p>If images are not loading as expected, please check the site 
                again in around an hour, the API is in demo mode and will not 
                asnwer kindly for more than 50 request/hour.
            </p>
            <button
                onClick={()=>setShowPopUp(false)}
            >Got it</button>
        </div>
    );
}

export { PopUp };