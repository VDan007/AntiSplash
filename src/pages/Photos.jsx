import React from "react";
import { useState, useContext } from "react";
import { Photo } from "../components/Photo";
import { Context} from "../Context";



function Photos() {
    
    const {pictures,setPhotoPages} = useContext(Context);
  

    const imagesToRender = pictures.map(
        item=>{
            return (
                <Photo
                    data={item}
                    key = {item.id}
                />
            );
        }
    );

    return (
        <main className="photos">
            {imagesToRender}
            <button 
                className="moreImageLoaderBtn"
                onClick={()=> {setPhotoPages(prev=>prev+1)} } 
                >Load more Images
            </button>
        </main>
    )
}

export  {Photos}