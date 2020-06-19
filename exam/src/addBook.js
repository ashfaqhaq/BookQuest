import React, {useState} from 'react';
import {BookContext} from './bookProvider';


const AddBook=()=>{
    const [title,setTitle] = useState('');
    // const [title,setTitle] = useContext(BookContext);
    
    const updateTitle =(e)=>{
        setTitle(e.target.value)
    }

    const addBook = (e) =>{
        e.preventDefault();
        setTitle({title:title})
                console.log(title)
    }
    

return(

<form>
    <input type="text" name="title" value={title}  onChange={updateTitle}>
 
    </input>
    <button  value={addBook}> hello button</button>

</form>

)

}
export default AddBook