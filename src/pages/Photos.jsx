import React from "react"

function Photos(props) {

    const imgClassList = ["img001","img002","img003"];

    const imagesToRender = props.pictures.map(
        item=>{
            return (
                <img src={item.url}
                     alt=""
                     key = {item.url}
                     className="img001"
                     
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