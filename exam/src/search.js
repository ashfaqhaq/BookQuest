import React from 'react';
import Page from './components/page';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,Redirect,withRouter
  } from "react-router-dom";
  import { NavLink } from 'react-router-dom' ;




function Content({title}){
    return(
        // 

        <div>
            {/* <h1>{props.content}</h1> */}
         <p>  Title: {title} </p>
        {/*          <p>  Image: {this.state.image_url}</p>
                <p> Number of Pages: {this.state.num_pages} </p>
            Authors:  {this.state.authors_array.map(author => {
                    return (
                        <li>
                            {author}
                        </li>

                    )
                })}


                <p>  Average Rating: {this.state.average_rating} </p>
                <p> Description: {this.state.description} </p>


           Book link: {this.state.book_url}
             */}
                </div>

    )}

function strip_html_tags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/<[^>]*>/g, '');
}


class Search extends React.Component {
    
  
    
    state = {
        // items: [],
        // value: props.value,
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
     handleSubmit = this.handleSubmit.bind(this);
    //  onRedirect = this.onRedirect.bind(this);
     
    //  handleSubmit(){
    //    return <Redirect to='/page' />
       
    // }

    handleSubmit(e) {
        //() {
            
        e.preventDefault();


        // let search= document.getElementById(search);
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://www.goodreads.com/book/title.xml?&key=Qc7VROD3HnHe8Z5osP9Gzw&title=" + this.state.search;

        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(response => response.text())


            .then(contents => {
                //console.log(contents);
                let parser = new DOMParser(),
                    xmlDoc = parser.parseFromString(contents, 'text/xml');
                console.log(xmlDoc);



                let grR = xmlDoc.getElementsByTagName('GoodreadsResponse')[0];
                let book = grR.getElementsByTagName('book')[0];
                let authors = book.getElementsByTagName('authors')[0];
                var authors_array = []




                let title = book.getElementsByTagName('title')[0].textContent
                // console.log(title)
                let image_url = book.getElementsByTagName('image_url')[0].textContent
                // console.log(image_url)
                let num_pages = book.getElementsByTagName('num_pages')[0].textContent
                // console.log(num_pages)


                let author_child = authors.getElementsByTagName('author');
                for (let i = 0; i < author_child.length; i++) {

                    let author_name = authors.getElementsByTagName('author')[i];
                    let name = author_name.getElementsByTagName('name')[0].textContent;
                    authors_array.push(name)

                }

                console.log(authors_array)

                let average_rating = (book.getElementsByTagName('average_rating')[0].textContent)
                // console.log(average_rating)
                let description = (book.getElementsByTagName('description')[0].textContent)
                description = strip_html_tags(description);
                // console.log(description)

                // let work = book.getElementsByTagName('work')[0]
                // console.log(work.getElementsByTagName("rating_dist")[0].textContent)

                let book_url = (book.getElementsByTagName('url')[0].textContent)
                // console.log(book_url)


                this.setState({
                    //items:
                    title,
                    image_url,
                    num_pages,
                    authors_array,
                    description,
                    average_rating,
                    book_url,

                    isLoaded: true,
                })
            })


            // const { history } = this.props;
            // if (history) history.push('/page');
          
            
           



    }

    redirectToHome = (e) => {
    //  e.preventDefault()
    // this.setState({
    //   temp: this.state.temp
    // })
    // console.log(this.state.temp)
    const { history } = this.props;
    if (history) history.push('/page');
  }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
       
        // <Link to="/login" />
    }


render(){
   
    return(
        <Router>


            <div>
              
                {/* <form onSubmit= {this.handleSubmit}>  */}
                {/* <form onSubmit= {<Link to="/page" />}>  */}
                <form onSubmit={this.redirectToHome}> 
                    <input
                        type="text"
                        placeholder="Search..."
                        value={this.state.search}
                        onChange={this.handleChange} />
                        {/* <button onClick={this.onRedirect}>Login</button> */}
                        {/* <button onClick={this.onRedirect}>Login</button> */}
                        {/* <button onClick={this.handleSubmit }>Login</button> */}
                    <input type="submit" value="Submit" />
                    
                </form>
               
                <Switch>
            {/* <Route path='/' exact>
              
            </Route> */}
             <Route path="/" exact>
              <Search />
              </Route>
            <Route path="/page">
              <Page />
            </Route>
          </Switch>
                
               

                
        </div>
        </Router>
    )
   

}
}


export default withRouter(Search);