import { useContext, useEffect , useState} from 'react';
import { Context } from '../Context';
import { Photo } from '../components/Photo';
import  Header  from '../components/Header';


function Account(){

    const {likedPictures, auth} = useContext(Context);
    let userName = "";
    const [picturesToRender, setPicturesToRender] = useState([]);
    
    if (auth.currentUser){
        userName = auth.currentUser.email;
    }

    useEffect(
        ()=>{
           
                 const  promisses = likedPictures.map( async item=>{
                 const resp = await  fetch(`https://api.unsplash.com/photos/${item[1].id}?client_id=aDoVNz0oe4OyiTv3FvuO3tOGZye5kVhJuZEUwcmsj7A`);
                 const data = await resp.json();   
                     
                 return data;
                   })

                   Promise.all(promisses)
                   .then(rv=> setPicturesToRender(rv));
                
        },[likedPictures]
    );

    

   


    return(
        <div className="accountContainer">
            <Header/>
            <div className='userInfoDiv'>
                <img src={`https://robohash.org/${userName}.png`}/>
                <h1>{userName}</h1>
            </div>
            <p className='accContainerTitle'>liked Photos</p>
            <div className='photos accountphotoContainer'>
                {picturesToRender.map(item=>{
                    return (<Photo
                                data={item}
                                key = {item.id}
                            />);
                })}

            </div>
        </div>
    );
}

export { Account };