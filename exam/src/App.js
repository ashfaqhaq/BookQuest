
import React from 'react';
// import Search from './search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import { NavLink } from 'react-router-dom';
// import Test from './test';
import Page from './components/page';
import { useHistory } from "react-router-dom";
// import SearchBar from './components/searchBar';
import { withRouter } from 'react-router-dom';

// function New(){
//   const history= useHistory();
//   const navigateTo = () => history.push('/page');
// }

class App extends React.Component {


  //  window.history = () => useHistory();
  redirectToHome = () => {
    const { history } = this.props;
    if(history) history.push('/page');
    
   }



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
      temp: 'awe',
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
  //  routeChange=(e)=> {
  //     return <Link to="/test" />
  //   }
  render() {
    const { history } = this.props;
    //    const { isLoaded} = this.state;
    // console.log(items);
    // // console.log(items.results);


    // if (!isLoaded)
    //     return <div>Loading...</div>;


    return (
      <Router>
        <div className="App">

          <form>
            <input type="text" />
            {/* <button onClick={()=><Redirect to="/page" />}>asdad</button> */}
            <div>
              <button onClick={this.redirectToHome}>You can go to Home </button></div>
            {/* <button onClick={()=>New.navigateTo} type="button" > asdasdj </button> */}
            {/* <Link to="/page"/> */}

      
          </form>
         
             <Switch>
            {/* {/* <Route path="/" exact>
              <SearchBar />
              </Route> */}
              <Route path="/page/">
              <Page title={this.state.temp}/>
            </Route>
          </Switch> 

        </div>

      </Router>

    )


  }

}

// export default withRouter(App);
export default withRouter(App);
// export default withRouter(App);




