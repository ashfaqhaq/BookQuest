import React, { Component } from 'react';
import { BookContext } from '../contextProvider/bookProvider'
import { withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './bookDetails.css';
import NavBar from './navbar'

function strip_html_tags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/<[^>]*>/g, ' ');
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
                let similar_books = book.getElementsByTagName('similar_books')[0]

                let similar_books_title = []
                let similar_books_author = []
                let similar_books_data = []
                let similar_child = similar_books.getElementsByTagName('book');

                //    console.log(similar_books)

                // let similar_child= book.getElementsByTagName('similar_books')[0].textContent
                for (let i = 0; i < similar_child.length; i++) {

                    let similar_titles = similar_books.getElementsByTagName('title')[i].textContent;
                    let authors = similar_books.getElementsByTagName('authors')[i];
                    let author_list = authors.getElementsByTagName('author')[0];
                    let first_author = author_list.getElementsByTagName('name')[0].textContent;
                    let data = (similar_titles + ' by ' + first_author)
                    console.log(data)
                    similar_books_author.push(first_author)
                    similar_books_title.push(similar_titles)
                    similar_books_data.push(data)
                    // authors_array.push(name) 


                }
                console.log(similar_books_author)
                console.log(similar_books_title)
                console.log(similar_books_data)

                // console.log(book_url)
                const shuffled = similar_books_data.sort(() => 0.5 - Math.random());

                // Get sub-array of first n elements after shuffled
                let selected = shuffled.slice(0, 5);

                this.setState({
                    //items:
                    title,
                    image_url,
                    num_pages,
                    authors_array,
                    description,
                    average_rating,
                    book_url,
                    similar_books_author,
                    similar_books_title,
                    // similar_books_data: similar_books_data.slice((Math.floor(Math.random)*10),5),
                    similar_books_data:selected,
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
        similar_books_title: [],
        similar_books_author: [],
        similar_books_data: [],
        isLoaded: false
    }


    render() {





        return (
            <div id="wallpaper">
                <NavBar />
                {!this.state.isLoaded ? (
                    <p> Loading.....</p>
                ) : (
                        <div>

                            {/* <div className="container-box"> */}
                            {/* <Container pt-20> */}





                            {/* <NavBar /> */}
                            <Container className="container-box">

                                <h1 id="title">  {this.state.title} </h1>
                            </Container>

                            <Container className="container-box">
                                {/* <p>  Image: {this.state.image_url}</p> */}
                                <div className="name">

                                    <img src={this.state.image_url} className="book-cover" alt={this.state.title} />
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
                            {/* <Container className="container-box"> */}



                            <div>
                                {/* <button class="btn btn-primary" 
                            type="button" data-toggle="collapse" 
                            data-target="#collapseExample" 
                            aria-expanded="false" 
                            aria-controls="collapseExample">
                                    Button with data-target
                                      </button> */}





                                      Similar Books are : {this.state.similar_books_data.map(data => {
                                    return (
                                        // <div class="collapse" id="collapseExample">
                                        // {/* <div class="accordion" id="accordionExample"> */}


                                        // {/* 
                                        // <div class="card">
                                        //     <div class="card-header" id="headingOne">
                                        //         <h2 class="mb-0">
                                        //             <button class="btn btn-link" type="button" data-toggle="collapse" data-target={'#'+{data}} aria-expanded="true" aria-controls={data}>
                                        //                 Collapsible Group Item        </button>
                                        //         </h2>
                                        //     </div>

                                        //     <div id={data} class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        //         <div class="card-body">
                                        //             {data}
                                        //      </div>
                                        //     </div>
                                        // </div>
                                        <div className="container-box">
                                            <div class="card card-body pl-5">
                                                <button onClick={() => {
                                                    navigator.clipboard.writeText(data);
                                                    console.log('copied data ')
                                                }}> copy to clipboard </button>
                                                <li>{data}</li>

                                            </div>
                                        </div>
                                        // </div>
                                    )
                                })}
                            </div>



                            {/* </Container> */}
                            


                            {/* </Container> */}



                        </div>
                    )}

            </div>

        )
    }
}

export default withRouter(BookDetails)