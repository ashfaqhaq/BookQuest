import React from 'react'

class Intro extends React.Component{
    render(){
    return(
    <div> 
   <h1> Search for a book </h1>
            <form ref='myForm' action='/test'>
              <input id="foo" type="text"/>
                <input type="Submit"/>
                </form>
  
    </div>
  )
}
}
  
export default Intro;