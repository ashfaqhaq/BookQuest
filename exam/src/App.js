
import React from 'react';
import Search from './search';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,Redirect
  } from "react-router-dom";
  import { NavLink } from 'react-router-dom' ;
import Test from './test';
import { useHistory } from "react-router-dom";
// import History from './history';
import { withRouter } from 'react-router-dom';




class App extends React.Component {
    

     

    // onRedirect(){
    //     this.history.push('/test/');
    // }

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            // items: [],
            value: props.value,
            temp: '',
            search: '',
            title: '',
            image_url: '',
            num_pages: '',
            authors_array: [],
            description: '',
            average_rating: '',
            book_url: '',

            isLoaded: false
        }

    }
     routeChange=(e)=> {
        this.props.history.push('/test');
      }
    render() {

        //    const { isLoaded} = this.state;
        // console.log(items);
        // // console.log(items.results);


        // if (!isLoaded)
        //     return <div>Loading...</div>;
        
    
        return (
            <Router>
            <div className="App">
                <h1> Search for a book </h1>
                {/* <Link to='/search'>Search</Link> */}
                <Link to="/test">Sign up</Link>



                {/* <button onClick={()=><Redirect to='/test'/>} > Hi there </button> */}

                {/* <form onSubmit={this.routeChange}>

                    <input type="text" >sdsd</input>
                </form> */}
                  {/* <button onClick={this.handleClick}>sda</button> */}
                {/* <button  onClick={() => history.push('/test')}>Click button to view products</button> */}
                {/* <Switch>
              <Route exact path="/" component={isLoggedIn} />
              </Switch> */}
                {/* <Search search={this.state} />
                <Route to="/page" /> */}
               
            </div>
            <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route path="/test">
            <Test />
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
            </Switch>  
             
             </Router> 
       
        )   


    }

}

// export default withRouter(App);
export default App;
// export default withRouter(App);




