import React from "react"

const Context = React.createContext("");

function ContextProvider(props) {

    const [allPhotos,setAllPhotos] = React.useState([]);

    return (
        <ContextProvider value="">
            {props.children}
        </ContextProvider>
    )
}

export {ContextProvider, Context}