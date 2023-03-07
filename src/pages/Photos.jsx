import React from "react"

function Photos(props) {

  

    const imagesToRender = props.pictures.map(
        item=>{
            return (
                <div className="imgContainer" key = {item.url}>
                    <img src={item.url}
                         alt=""
                         className="img001"
                    />
                </div>
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