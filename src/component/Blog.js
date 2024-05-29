
import React, {useState} from "react";
function Blog(){
    const [data,setData]=useState(null);
    const [print,setPrint]=useState(false);
    const [show,setShow]=useState(true);
    function getData(val){
        setData(val.target.value)
        setPrint(false)
        console.warn(val.target.value)
    }
    return(
        <div>
{
    show?
        <div>    {
            print?
            <h1>{data}</h1>
            :null
           } 
           </div>:null
}
           <input type="text" onChange={getData}/>
           <button onClick={()=>setPrint(true)} > Print Value</button>
           <button onClick={()=> setShow(!show)}> Toggle</button>
        </div>
    )
}
export default Blog;