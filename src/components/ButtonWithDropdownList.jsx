import { useRef, useEffect, useState } from "react";




function ButtonWithDropdownList(props){
    const [showList,setShovList] = useState(false);
    const listRef = useRef(null);
    const [content,setContent] = useState(props.content);
    
        
    


    function toggleList(){
        setShovList(prev=>!prev);
    }

    function closeOnAwayClick(e){
        if(listRef.current && !listRef.current.contains(e.target)){
            setShovList(false);
            console.log('should');
        }
        
    }

    useEffect(
        ()=>{
            window.addEventListener('mousedown',closeOnAwayClick);
            return ()=> window.removeEventListener('mousedown',closeOnAwayClick);
        }
    );

    return(
        <div className="btnWithList">

            {showList && <div ref={listRef} className="btnListShare">
                            {content === 'shareList' && <ShareList/>}
                            {content === 'info' && <Info/>}
                            {content === 'report' && <Report/>}
                        </div>}

            <button
                onClick = {toggleList}
            >{props.text}
            </button>

        </div>
    );
}


function ShareList(){
    return(
        <ul>
            <li>Facebook</li>
            <li>Pinterest</li>
            <li>Twitter</li>
            <li>Email</li>
            <li>Copy link</li>
        </ul>
    );
}

function Info(){
    return (
        <div>info</div>
    );
}

function Report(){
    return(
        <p>Report</p>
    );
}



export { ButtonWithDropdownList}