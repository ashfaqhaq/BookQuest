import React,{useContext,Component, useState,createContext} from 'react';


export const BookContext= createContext();

export const  BookProvider = (props) =>{

    const [title,setTitle]=useState('')
    return( <BookContext.Provider value={[title,setTitle]}>

        {props.children}
    </BookContext.Provider>
        
    )


}