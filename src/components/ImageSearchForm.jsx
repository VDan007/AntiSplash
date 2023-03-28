import { useEffect, useState, useContext, useRef } from 'react';
import { Context } from '../Context';

function ImageSearchForm(){

    const [searchInput,setSearchInput] = useState('');
    const { setPictures,setSearch,setSearchTerm } = useContext(Context);
    const inputRef = useRef(null);

    function search(e){
        e.preventDefault();
        
        const queryTerm = searchInput
                             .trim()
                             .replace(' ','+');
         
                             
         setPictures([]);         
         setSearch(queryTerm);
         setSearchTerm(queryTerm);
         setSearchInput('');
         
       
     }

    return( 


    <form onSubmit={search}>
        <span className="inputSpan">
            <img className="inputIcon" src="/search-line.svg" alt="" />
                <input type="text" 
                    ref={inputRef}
                    placeholder="Search high-resolution images" 
                    value = {searchInput}
                    onChange = {e=> setSearchInput(e.target.value) }

                />
        </span>
    </form>
    );
}

export {ImageSearchForm};