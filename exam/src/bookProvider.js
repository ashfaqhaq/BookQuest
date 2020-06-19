import React, { useContext, Component, useState, createContext } from 'react';


export const BookContext = createContext();
 class BookProvider extends Component{
// export const BookProvider = (props) => {

    state={title:"Macbeth",author:"Shakespeare"}
render(){
    return (
        < BookContext.Provider value={{...this.state}} >
            {this.props.children}
        </ BookContext.Provider >

    )


}}

export default BookProvider;