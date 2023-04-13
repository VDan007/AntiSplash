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
            console.log('shouldd');
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

            {showList && <div ref={listRef} className="btnListDiv">
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
        <ul className='shareListul'>
            <li>Facebook</li>
            <li>Pinterest</li>
            <li>Twitter</li>
            <li>Email</li>
            <li>Copy link</li>
        </ul>
    );
}

function Info(){
    const [joke,setJoke] = useState('');
    useEffect(
        ()=>{
            fetch('https://api.chucknorris.io/jokes/random')
            .then(resp=>resp.json())
            .then(data=>setJoke(data.value))

            } ,[]);


    return (
        <div
            className='infoDiv'
        >
            <p>{joke}</p>
        </div>
    );
}

function Report(){
    return(
        <div className='reportDiv'>
            Report
        </div>
    );
}



export { ButtonWithDropdownList}