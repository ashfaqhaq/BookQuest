import React, { Component, useContext, useState } from 'react'
import { BookContext } from './bookProvider'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect,withRouter
  } from "react-router-dom";
  import { useHistory } from "react-router-dom";


// 
class Nav extends Component {
    state={
        query:''
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.query)
       const search_query=this.state.query
        // this.setState({
        //     query:this.state.query
        // })
        const { history } = this.props;
           if (history) this.props.history.push(`/search/:${search_query}`)
        // if (history) history.push({
        //     pathname: '/search',
        //     customNameData: search_query,
        //   });
        this.context.update({ search: this.state.query })
        
         
        
        
    }

    handleChange=(e)=>{
        // console.log(this.state.query)
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

export default withRouter(Nav);
