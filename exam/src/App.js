
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import BookDetails from './components/bookDetails';
import BookProvider from './contextProvider/bookProvider';
import SearchBar from './components/searchBar';
// import Components from './components/bookDetails';


class App extends React.Component {


  



  /**
   * constructor
  //  *
  //  * @object  @props  parent props
  //  * @object  @state  component state
  //  */
  // constructor(props) {

  //   super(props);
  //   // static contextType = BookContext;
  //   // this.state = {
  //   //   // items: [],
  //   //   value: props.value,
  //   //   temp: '',
  //   //   search: '',
  //   //   title: '',
  //   //   image_url: '',
  //   //   num_pages: '',
  //   //   authors_array: [],
  //   //   description: '',
  //   //   average_rating: '',
  //   //   book_url: '',

  //   //   isLoaded: false
  //   // }

  // }
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


    // const { search, author } = this.context
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
          <div className="App mt-3 primary">
            {/* <Container> */}
            <Switch>
          
              <Route path="/" exact >
                <SearchBar />

              </Route>
              <Route path="/search/:search_query">
                {/* <SearchBar /> */}
                {/* <Wallpapers> */}
                
                {/* <Components /> */}
                <BookDetails />
                {/* </Wallpapers> */}
              </Route>
            </Switch>
            {/* <Nav />
        <AddBook />
           */}


            {/* <New /></New> */}
            {/* <form >
            <input type="text" onChange={this.handleChange} value={this.state.temp} />
            {/* <button onClick={()=><Redirect to="/page" />}>asdad</button> */}
            {/* <div>
              <button onClick={this.redirectToHome}>You can go to Home </button></div> */}
            {/* <button onClick={()=>New.navigateTo} type="button" > asdasdj </button> */}
            {/* <Link to="/page"/> */}


            {/* </form>   */}


            {/* </Container> */}
          </div>
        </BookProvider>
        
      </Router>

    )


  }

}

// export default withRouter(App);
// export default App;
export default withRouter(App);




