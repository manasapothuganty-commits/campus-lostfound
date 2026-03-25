
import React, { useState } from "react";
import AddItem from "./AddItem";
import MatchList from "./MatchList";

function App(){

  const [matches, setMatches] = useState([]);
  const [userItem, setUserItem] = useState(null);

  return (
    <div style={{
  padding:"20px",
  maxWidth:"500px",
  margin:"auto",
  fontFamily:"Arial",
  textAlign:"center"
}}>

      <h1>Digital Lost & Found System</h1>

      <AddItem setMatches={setMatches} setUserItem={setUserItem} />

      <hr/>

      <MatchList matches={matches} userItem={userItem} />

    </div>
  );
}

export default App;




























// import React,{useState,useEffect} from "react";
// import axios from "axios";

// function App(){

// const [items,setItems]=useState([]);
// const [matches,setMatches]=useState([]);

// const [name,setName]=useState("");
// const [description,setDescription]=useState("");
// const [location,setLocation]=useState("");
// const [status,setStatus]=useState("LOST");
// const [contact,setContact]=useState("");

// useEffect(()=>{
//  fetchItems();
// },[]);

// const fetchItems=()=>{
//  axios.get("http://localhost:8080/items")
//  .then(res=>setItems(res.data));
// }

// const addItem=()=>{

//  axios.post("http://localhost:8080/add",{
//    name:name,
//    description:description,
//    location:location,
//    status:status,
//    contact:contact
//  }).then(()=>{
//    fetchItems();
//  });
// }

// const matchItem=(itemName)=>{

//  axios.get(`http://localhost:8080/match/${itemName}`)
//  .then(res=>{
//    setMatches(res.data);
//  });

// }

// return(

// <div style={{padding:"30px"}}>

// <h1>Digital Lost & Found System</h1>

// <h3>Report Item</h3>

// <input placeholder="Item Name"
// onChange={(e)=>setName(e.target.value)}/>

// <br/><br/>

// <input placeholder="Description"
// onChange={(e)=>setDescription(e.target.value)}/>

// <br/><br/>

// <input placeholder="Location"
// onChange={(e)=>setLocation(e.target.value)}/>

// <br/><br/>

// <input placeholder="Contact"
// onChange={(e)=>setContact(e.target.value)}/>

// <br/><br/>

// <select onChange={(e)=>setStatus(e.target.value)}>
// <option value="LOST">LOST</option>
// <option value="FOUND">FOUND</option>
// </select>

// <br/><br/>

// <button onClick={addItem}>Submit</button>

// <hr/>

// <h2>Items List</h2>

// {items.map(i=>(
// <div key={i.id}>

// <h3>{i.name}</h3>
// <p>{i.description}</p>
// <p>{i.location}</p>
// <p>Status: {i.status}</p>
// <p>Contact: {i.contact}</p>

// <button onClick={()=>matchItem(i.name)}>
// Match
// </button>

// <hr/>

// </div>
// ))}

// <h2>Matched Found Items</h2>

// {matches.map(m=>(
// <div key={m.id}>

// <h3>{m.name}</h3>
// <p>{m.description}</p>
// <p>{m.location}</p>
// <p>Contact: {m.contact}</p>

// <hr/>

// </div>
// ))}

// </div>

// )

// }

// export default App;
