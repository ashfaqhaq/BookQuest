import React, { Component ,useContext ,useState  } from 'react'
import {BookContext} from './bookProvider'

export const Nav = (props) => {
    const [title,setTitle] = useContext(BookContext)
    
        return(
            <div>
              <h3>  {props.title} </h3>
            </div>
        )
    }


export default Nav
