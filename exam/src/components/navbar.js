import React, { Component } from 'react'
import { BookContext } from '../contextProvider/bookProvider'
import {
    withRouter
  } from "react-router-dom";
 
 class NavBar extends Component {
    state={
        query:''
    }
    
    onSubmit=()=>{
        // e.preventDefault();
        console.log(this.state.query)
       const search_query=this.state.query
       
        // this.setState({
        //     query:this.state.query
        // })
        this.context.update({ search: this.state.query })
        // <Redirect{} />
        const { history } = this.props;
       
           if (history) this.props.history.push(`/search/:${search_query}`)
        // if (history) history.push({
        //     pathname: '/search',
        //     customNameData: search_query,
        //   });
        
        
         
        
        
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
            <div class="container">
               {/* <form onSubmit={this.onSubmit}>
               
                <input type="text" onChange={this.handleChange} />
                {/* value={this.state.query} */}
                {/* <button onClick={this.onSubmit} > Click me  </button> */}
                {/* <Button variant="success">Success</Button>{' '} */} 

                {/* <Button color="secondary">Secondary btn</Button>{' '} 
                <Button danger>
                    Submit kardo bhai */}
                {/* <Button type="submit">Button</Button>{' '} */}
                {/* </Button>
                <Button className="secondary">
                    Submit kardo bhai */}
                {/* <Button type="submit">Button</Button>{' '} */}
                {/* </Button> */}
               
               {/* </form> */}
               {/* <h3>{this.context.title}</h3> */}


               {/* <div className="SApps"> */}
        <section>
          {/* <div className="Swallpaper"> */}
           
            <div className="Sform-container">
              <form>
                <div className="Sform-left">
                  <label for="Ssearch">Enter the name of another book</label>
                  <input type="text" id="Ssearch" onChange={this.handleChange} />
                  <p>Example: Think and grow rich</p>
                  {/* value={this.state.query} */}
                </div>
                <button className="btn btn-primary"
                  onClick={this.onSubmit}>
                  Get Book Details
                  </button>
                 
              </form>
            </div>
          {/* </div> */}
        </section>
      {/* </div> */}
            </div>
           
        )
    }
}

NavBar.contextType = BookContext

export default withRouter(NavBar);
