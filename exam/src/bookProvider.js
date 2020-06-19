import React, { useContext, Component, useState, createContext } from 'react';


export const BookContext = createContext();
 class BookProvider extends Component{
    //  state
    constructor(props) {
		super(props)
		this.updateState = this.updateState.bind(this) // ← Here
		this.state = ({
			search: 'hel',
			update: this.updateState // ← Here
		})
	}

	updateState(values) { // ← And here
		this.setState(values)
	}

	render() {
		return (
			<BookContext.Provider value={this.state}>
                {/* { state: this.state, update: this.update } */}
				{this.props.children}
			</BookContext.Provider>
		)
	}
// export const BookProvider = (props) => {

//     state={title:"Macbeth",author:"Shakespeare"}
// render(){
//     return (
//         < BookContext.Provider value={{...this.state}} >
//             {this.props.children}
//         </ BookContext.Provider >

//     )


}

export default BookProvider;