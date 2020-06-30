import React, { Component} from 'react'
import { BookContext } from '../contextProvider/bookProvider'
import {    withRouter  } from "react-router-dom";
  
import "../index.css"
  

// 
class SearchBar extends Component {
    state={
        query:''
    }
    
    onSubmit=(e)=>{
        
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
            <div>
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


               <div className="Apps">
        <section>
          <div className="wallpaper pt-3">
            <h1> BookQuest </h1>
            <p>
              Explore the richness  of books , sea
            </p>
            <div className="form-container">
              <form onSubmit={this.onSubmit}>
                <div className="form-left">
                  <label for="search">Enter the name of a book</label>
                  <input type="text" id="search" onChange={this.handleChange} />
                  <p>Example: Think and grow rich</p>
                  {/* value={this.state.query} */}
                </div>
                <input
                  type="button"
                  onClick={this.onSubmit}
                  value="Get Book Details"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
            </div>
           
        )
    }
}

SearchBar.contextType = BookContext

export default withRouter(SearchBar);
