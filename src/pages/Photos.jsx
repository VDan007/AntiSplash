import React from "react";
import { useState, useContext } from "react";
import { Photo } from "../components/Photo";
import { Context} from "../Context";
import { ClickedImage } from "../components/ClickedImage";


function Photos() {
    
    const {pictures} = useContext(Context);
  

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
            <ClickedImage
                photo={pictures[0]}/>
        </main>
    )
}

export  {Photos}