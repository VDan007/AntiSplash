import { useRef, useEffect, useState } from "react";

function ButtonWithDropdownList(props){
    const [showList,setShovList] = useState(false);
    const listRef = useRef(null);


    function toggleList(){
        setShovList(prev=>!prev);
    }

    function closeOnAwayClick(e){
        if(listRef.current && !listRef.current.contains(e.target)){
            setShovList(false);
            console.log('should');
        }
        // console.log('works');
        // console.log(listRef.current);
    }

    useEffect(
        ()=>{
            window.addEventListener('mousedown',closeOnAwayClick);
            return ()=> window.removeEventListener('mousedown',closeOnAwayClick);
        }
    );

    return(
        <div className="btnwithList">

            {showList && <div ref={listRef}>list show</div>}

            <button
                onClick = {toggleList}
            >{props.text}
            </button>

        </div>
    );
}

export { ButtonWithDropdownList}