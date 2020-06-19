import React, { Component, useContext, useState } from 'react'
import { BookContext } from './bookProvider'

class Nav extends Component {
    static contextType = BookContext;

    render() {
        const { title, author } = this.context
        return (
            <div>
                <h1>
                    {title}
                    </h1>
                    <h2>
                    {author}
                </h2>
            </div>
        )
    }
}


export default Nav
