import React, { Component } from 'react'
import {    withRouter  } from "react-router-dom";
import jsonData from './data.json'

export class Collection extends Component {
    handleSubmit(value) {
        console.log(value)
          
        // console.log(this.state.query)
       const search_query=value
        // this.setState({
        //     query:this.state.query
        // })
        // this.context.update({ search: this.state.query })
        // <Redirect{} />
        const { history } = this.props;
        console.log(history)
           if (history) this.props.history.push(`/search/:${search_query}`)
    }
    render() {


        const loadData = [...jsonData];
        console.log(loadData[0])
        // var classicArray=loadData[0].Classic
        // console.log(classicArray)
        var classic = loadData[0].Classic[Math.floor(Math.random() * loadData[0].Classic.length)];
        var Autobiography = loadData[0].Autobiography[Math.floor(Math.random() * loadData[0].Autobiography.length)];
        var History = loadData[0].History[Math.floor(Math.random() * loadData[0].History.length)];
        var Novel = loadData[0].Novel[Math.floor(Math.random() * loadData[0].Novel.length)];
        var Psychology = loadData[0].Psychology[Math.floor(Math.random() * loadData[0].Psychology.length)];
        return (
            <div className="container mb-5 justify-content-center">
                

                <h1 className="jumbotron pb-0 bg-transparent font-weight-bold mb-0">Confused on what to read next?</h1>
                <h3 className="jumbotron pb-0 bg-transparent font-weight-bold mb-0"> Try something from our handpicked titles </h3>
            <div className="container mb-3 pt-1 d-flex flex-wrap">
                
                    <h3> 
                     </h3>
                   
                <button className="btn-primary m-2 rounded" onClick={() => { this.handleSubmit(classic) }}>
                    Random Classic Book  
                     <span class="ml-1 mb-1 badge badge-light">     {loadData[0].Classic.length}  </span>
                </button>
               
               
                <button className="btn-primary m-2 rounded" onClick={() => { this.handleSubmit(Autobiography) }}> 
                Random Autobiography
                                     <span class="ml-1 mb-1 badge badge-light">     {loadData[0].Autobiography.length}  </span>
                </button>
                <button className="btn-primary m-2 rounded" onClick={() => { this.handleSubmit(History) }}>  Random History Book  
                     <span class="ml-1 mb-1 badge badge-light">     {loadData[0].History.length}  </span>
                </button>
                <button  className="btn-primary m-2 rounded" onClick={() => { this.handleSubmit(Novel) }}> Random Novel
                     <span class="ml-1 mb-1 badge badge-light">     {loadData[0].Novel.length}  </span>
                </button>
                <button  className="btn-primary m-2 rounded" onClick={() => { this.handleSubmit(Psychology) }}>  Random Psychology Book
                     <span class="ml-1 mb-1 badge badge-light">     {loadData[0].Psychology.length}  </span>
                </button>
               

            </div>
        </div>
        )
    }
}

export default withRouter(Collection)
