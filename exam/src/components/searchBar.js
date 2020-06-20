import React from 'react'
import { Link, Redirect, Switch, Route } from 'react-router-dom';
import Page from './page';

class SearchBar extends React.Component {
    state = {
        // items: [],
        // value: props.value,
        temp: 'bb',
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
    //  handleSubmit = this.handleSubmit.bind(this);
// redirectToHome = (e) => {
  //   //  e.preventDefault()
  //   // this.setState({
  //   //   temp: this.state.temp
  //   // })
  //   // console.log(this.state.temp)
  //   const { history } = this.props;
  //   if (history) history.push('/page');
  // }



    handleSubmit = (e) => {
      e.preventDefault();
      

    }
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1> Search for a book </h1>
                {/* <form ref='myForm' action='/page'> */}
                <form ref='myForm' onSubmit={this.handleSubmit}>

                    <input id="foo" type="text" onChange={this.handleChange} />


                    </form>

                    {/* <Switch>
                        {/* <Route path="/" exact>
              <SearchBar />
              </Route> */}
                        {/* <Route path="/page/">
                            <Page title={this.state.temp} />
                        </Route>
                    </Switch>  */}



            </div>
        )
    }
}

export default SearchBar;