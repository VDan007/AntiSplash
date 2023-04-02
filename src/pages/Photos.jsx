import React, { useEffect } from "react";
import { useRef, useContext } from "react";
import { Photo } from "../components/Photo";
import { Context} from "../Context";



function Photos() {
    const signalRef = useRef(null);
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

    useEffect(
        ()=>{const observer = new IntersectionObserver(
                (entries)=>{
                   const entry = entries[0];
                   setPhotoPages(prev=>prev+1)
                }
            );
            observer.observe(signalRef.current);
        },[]
    );

    return (
        <main className="photos">
            <span ref={signalRef}  className='loadSignal'></span>
            {imagesToRender}
        </main>
    )
}

export  {Photos};