import React, { useState } from "react";

const Todo=(props)=>{




     return(
     <>

     <div className="todo_style">
     <i className="fa fa-times" aria-hidden="true" onClick={()=>
     {
          props.onSelect(props.id);
     }}/>
 <li>{props.name}</li> 
     
     </div>
  </>
     );


};
export default Todo;