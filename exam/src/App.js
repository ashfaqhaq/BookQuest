
import React from 'react';
import Search from './search';

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


    render() {

        //    const { isLoaded} = this.state;
        // console.log(items);
        // // console.log(items.results);


        // if (!isLoaded)
        //     return <div>Loading...</div>;

        return (
            <div className="App">
                <h1> Search for a book </h1>
                <Search search={this.state} />
            </div>
        )

    }

}

export default App;




