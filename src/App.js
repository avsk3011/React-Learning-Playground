import {useState} from 'react';
import './App.css';
import Student from './component/Student';
import Blog from './component/Blog';

function App() {
const [name,setName]=useState("Anil")

  return ( 
    <div>
    <h1> Props In React</h1>
    <Student name={name}/>
    <button onClick={()=>{setName("Anaya")}}> Update Name</button>
    <Blog/>

  </div>
  );
}

export default App;
