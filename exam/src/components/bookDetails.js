import React, { useState, Component } from 'react';
import { BookContext } from '../contextProvider/bookProvider'
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import Nav from './searchBar';
import { withRouter, Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './bookDetails.css';
function strip_html_tags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return  str.replace(/<[^>]*>/g, ' ') ;
}

class BookDetails extends Component {
    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired
    //   }
    static contextType = BookContext;
    constructor(props) {
        super(props)

        // const { match, location, history } = this.props
        // console.log(location)
        // console.log(this.getParams)
        // console.log( this.props);
        //    let search= 
        //const search=id;
        // console.log(this.context.search);
        // console.log(this.props)
        let search = (this.props.match.params.search_query)
        //    const { search } = this.context
        // console.log(search,'is the book')
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://www.goodreads.com/book/title.xml?&key=Qc7VROD3HnHe8Z5osP9Gzw&title=" + search;
        console.time('test');
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
                
                description = description.replace(/<br ?\/?>/g, "\n");
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
                console.timeEnd('test');

            })


    }

    state = {
        // items: [],
        // value: props.value,
        temp: 'bb',
        // search: '',
        title: '',
        image_url: '',
        num_pages: '',
        authors_array: [],
        description: '',
        average_rating: '',
        book_url: '',

        isLoaded: false
    }


    render() {

        const { search, author } = this.context




        return (
            <div id="wallpaper">
                {!this.state.isLoaded ? (
                    <p> Loading.....</p>
                ) : (
                        <div>

                            {/* <div className="container-box"> */}
                            {/* <Container pt-20> */}






                            <Container className="container-box">
                            
                                <h1 id="title">  {this.state.title} </h1>
                                </Container>

                                <Container className="container-box">
                                {/* <p>  Image: {this.state.image_url}</p> */}
                                <div className="name">

                                    <img src={this.state.image_url} className="book-cover" />
                                    <div className="content-right">
                                        <p> Average Rating: <span className="data"> {this.state.average_rating} </span></p>
                                        <p> Number of Pages: <span className="data"> {this.state.num_pages} </span></p>

                                <p> Authors:  {this.state.authors_array.map(author => {
                                            return (
                                                    // {author} 
                                                 <span id="authors"> {author} , </span> 
                                                
                                            )
                                        })}
                                        </p>
                                    </div>
                                </div>
                            </Container>
                            <Container className="container-box">
                            <p> Description: {this.state.description} </p>
                            </Container>
                                  Book link: {this.state.book_url}

                            {/* </Container> */}
                        </div>
                    )}
            </div>
        )
    }
}

export default withRouter(BookDetails)