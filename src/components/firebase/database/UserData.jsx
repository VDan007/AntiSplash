

import { Context } from '../../../Context';
import { useContext } from 'react';



function addUserToDatabase(email,name){
    const {db} = useContext(Context);
    set(ref(db,'users/' + email),{
        username: name,
        email: email,
        likedPictures :[],
    });

}

