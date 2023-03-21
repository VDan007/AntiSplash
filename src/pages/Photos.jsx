import React from "react";
import { useState, useContext } from "react";
import { Photo } from "../components/Photo";
import { Context} from "../Context";
import { ClickedImage } from "../components/ClickedImage";


function Photos() {
    
    const {pictures,pictureOpen} = useContext(Context);
  

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
           
        </main>
    )
}

export  {Photos}