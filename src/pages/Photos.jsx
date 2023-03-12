import React from "react";
import { useState, useContext } from "react";
import { Photo } from "../components/Photo";
import { Context} from "../Context";


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
        </main>
    )
}

export  {Photos}