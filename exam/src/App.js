
import React from 'react';
import Search from './search';
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
import {BookProvider} from './bookProvider';
import Nav from './nav';

// function New(){
//   const history= useHistory();
//   const navigateTo = () => history.push('/page');
// }

class App extends React.Component {


  //  window.history = () => useHistory();




  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {

    super(props);

    // this.state = {
    //   // items: [],
    //   value: props.value,
    //   temp: '',
    //   search: '',
    //   title: '',
    //   image_url: '',
    //   num_pages: '',
    //   authors_array: [],
    //   description: '',
    //   average_rating: '',
    //   book_url: '',

    //   isLoaded: false
    // }

  }
  // redirectToHome = (e) => {
  //   //  e.preventDefault()
  //   // this.setState({
  //   //   temp: this.state.temp
  //   // })
  //   // console.log(this.state.temp)
  //   const { history } = this.props;
  //   if (history) history.push('/page');
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     temp: e.target.value
  //   })
  // }

  //  routeChange=(e)=> {
  //     return <Link to="/test" />
  //   }
  render() {
    // state = {
    //     // items: [],
    //     value: props.value,
    //     temp: '',
    //     search: '',
    //     title: '',
    //     image_url: '',
    //     num_pages: '',
    //     authors_array: [],
    //     description: '',
    //     average_rating: '',
    //     book_url: '',
  
    //     isLoaded: false
    // }
    // const { history } = this.props;
    //    const { isLoaded} = this.state;
    // console.log(items);
    // // console.log(items.results);


    // if (!isLoaded)
    //     return <div>Loading...</div>;


    return (

      <Router>
        <BookProvider>
        <div className="App">


          <Nav title='heysd'/>
           {/* <form >
            <input type="text" onChange={this.handleChange} value={this.state.temp} />
            {/* <button onClick={()=><Redirect to="/page" />}>asdad</button> */}
            {/* <div>
              <button onClick={this.redirectToHome}>You can go to Home </button></div> */}
            {/* <button onClick={()=>New.navigateTo} type="button" > asdasdj </button> */}
            {/* <Link to="/page"/> */}


          {/* </form>   */}

          <Switch>
            {/* <Route path='/' exact>
              
            </Route> */}
             {/* <Route path="/" exact>
              <Search />
              </Route>
            <Route path="/page/">
              <Page />
            </Route> */}
          </Switch>

        </div>
        </BookProvider>
      </Router>

    )


  }

}

// export default withRouter(App);
export default App;
// export default withRouter(App);




