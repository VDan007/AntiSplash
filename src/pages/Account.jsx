import { useContext, useEffect , useState} from 'react';
import { Context } from '../Context';

function Account(){

    const {likedPictures} = useContext(Context);
    const [picturesToRender, setPicturesToRender] = useState([]);
    console.log(picturesToRender);
    
   

    //https://api.unsplash.com/photos/nDV6ahWLvEg?client_id=YOUR_ACCESS_KEY

    useEffect(
        ()=>{
           
                 const  promisses = likedPictures.map( async item=>{
                 const resp = await  fetch(`https://api.unsplash.com/photos/${item[1].id}?client_id=aDoVNz0oe4OyiTv3FvuO3tOGZye5kVhJuZEUwcmsj7A`);
                 const data = await resp.json();   
                 //console.log(data);     
                 return data;
                   })

                   Promise.all(promisses)
                   .then(rv=> setPicturesToRender(rv));
                
        },[]
    );

    

   


    return(
        <div className="accountContainer">
            <h1>user account</h1>
            
        </div>
    );
}

export { Account };