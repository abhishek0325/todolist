import logo from './logo.svg';
import './index.css';
import { useState } from 'react';
import Todo from './Todo'
const App =()=>
{
  const [inputlist,setinputlist]=useState("");
  const [items,setitems]=useState([]);

  const onevent=(event)=>
  {
  setinputlist(event.target.value)  ;
  }
  const listofitems=()=>
  {
setitems((old)=>
{
  return[...old,inputlist];
  
});

setinputlist('');

  };
  const delitem =(id) =>
  {
setitems((old)=>
{
  return(
old.filter((arr,index)=>
{
  return index!==id;
}


)


  );
}

)
    
  }
  
  return(
  <>
<div className="main_div">
<div className="center_div">
<br/>
<h1>ToDo List</h1>
<br/>
<input type="text" placeholder="Add items" onChange={onevent} value={inputlist}/>
<button onClick={listofitems}>+</button>

<ol>
{
  items.map((v,i)=>{

  return <Todo  name={v}
key={i}
id={i}
onSelect={delitem}



  />
  })
}
  
  </ol>

</div>

</div>
<footer>madeBy AbhishekVerma</footer>
  </>
  );
}

export default App;