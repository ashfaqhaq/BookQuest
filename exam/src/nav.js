import React, { Component, useContext, useState } from 'react'
import { BookContext } from './bookProvider'


// 

class Nav extends Component {
    state={
        query:''
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.query)
        // this.setState({
        //     query:this.state.query
        // })
        this.context.update({ search: this.state.query })
    }

    handleChange=(e)=>{
        console.log(this.state.query)
        this.setState({
            query: e.target.value
            
        })
        
    }



    static contextType = BookContext;

    render() {

        //const { title, author } = this.context
        return (
            <div>
               <form>
                <input type="text" onChange={this.handleChange} />
                {/* value={this.state.query} */}
                <button onClick={this.onSubmit} > Click me  </button>

               </form>
               {/* <h3>{this.context.title}</h3> */}
            </div>
        )
    }
}
Nav.contextType = BookContext

export default Nav
