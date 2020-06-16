
import React from 'react';
import Search from './search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Test from './test';
import { useHistory } from "react-router-dom";
import Intro from './history';
import { withRouter } from 'react-router-dom';



class App extends React.Component {






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
  //  routeChange=(e)=> {
  //     return <Link to="/test" />
  //   }
  render() {

    //    const { isLoaded} = this.state;
    // console.log(items);
    // // console.log(items.results);


    // if (!isLoaded)
    //     return <div>Loading...</div>;


    return (
      <Router>
        <div className="App">

          {/* <form onSubmit={<Link to="/test"/>}>
            <input type="text" />
            <button onClick={<Link to="/test"/>}>asdad</button>

      
          </form> */}
          <div>
         

          </div>

             <Switch>
            <Route path="/" exact>
              <Intro />
              </Route>
            <Route path="/test/">
              <Test />
            </Route>
          </Switch>

        </div>

      </Router>

    )


  }

}

// export default withRouter(App);
export default App;
// export default withRouter(App);




