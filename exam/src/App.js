
import React from 'react';
// import { debounce } from 'lodash'



function strip_html_tags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/<[^>]*>/g, '');
}


/**
 * App
 *
 * Simple react js fetch example
 */
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
         this.handleSubmit = this.handleSubmit.bind(this)
        // this.changeSearch = debounce(this.props.changeSearch, 250)
    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
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

    }

    /**
     * render
     *
     * Render UI
        */

    handleChange = (e) => {
        this.setState({
            search:e.target.value
        })
    }
    //     this.setState({search});
    // },3000);
 // console.log(this.state.temp)
    //     const val = e.target.value

    // this.setState({ search: val }, () => {
    //   this.changeSearch(val)
    // })
    
    // handleSubmit(event) {

       
    //     event.preventDefault();
    //     // alert('A name was submitted: ' + this.state.search);
    //     // let new_value=state.temp;
    //     // console.log(this.state)
    //     // this.setState({
    //     //     search:this.state.temp
    //     // })
        
    //     // search()

    // }

    render() {

        // const { isLoaded, items } = this.state;
        // console.log(items);
        // // console.log(items.results);


        // if (!isLoaded)
        //     return <div>Loading...</div>;

        return (
            <div className="App">

                <div>


                    <h1> Search for a book </h1>
                    <div>
                        {/* {console.log(this.state)} */}
                        <form onSubmit={this.handleSubmit}>
                        <input 
         type="text" 
         placeholder="Search..."
         value={this.state.search} 
         onChange={this.handleChange} />
                           
                            <input type="submit" value="Submit" />
                        </form>

                        <p>  Title: {this.state.title} </p>
                        <p>  Image: {this.state.image_url}</p>
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


                    </div>




                </div>
            </div>
        );

    }

}

export default App;




