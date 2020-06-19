import React, {useState, Component} from 'react';
import {BookContext} from './bookProvider';

class AddBook extends Component{
    static contextType = BookContext;

render() {
    const {search,author} =this.context
    return (
        <div>
            <h1>
                {search} is the addBook
                </h1>
                <h2>
                    {/* {update} */}
                {/* {author} */}
            </h2>
        </div>
    )
}
}

export default AddBook