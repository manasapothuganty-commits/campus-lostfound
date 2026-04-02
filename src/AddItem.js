import React, { useState } from "react";
import { addItem, matchItems } from "./api";

function AddItem({ setMatches, setUserItem, setSearched }) {

  const [item, setItem] = useState({
  name: "",
  description: "",
  location: "",
  status: "LOST",
  contact: "",
  category: ""   // ✅ add this
});

  const [showMatchBtn, setShowMatchBtn] = useState(false);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {

  // ✅ ADD VALIDATION HERE (TOP)
  if(!item.name || !item.location || !item.contact || !item.category){
    alert("Please fill all fields including category");
    return;
  }

    addItem(item).then(() => {
      setUserItem(item);
      setShowMatchBtn(true);
    });
  };

  const handleMatch = () => {
    matchItems(item.name, item.status).then(res => {
      setMatches(res.data);
      setSearched(true);
    });
  };

  return (
    <div style={{
      background:"#fff",
      padding:"25px",
      borderRadius:"10px",
      boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
      maxWidth:"400px",
      margin:"auto"
    }}>

      <h2>Report Item</h2>

      <input name="name" placeholder="Item Name" onChange={handleChange} style={inputStyle}/>
      <input name="description" placeholder="Description" onChange={handleChange} style={inputStyle}/>
      <input name="location" placeholder="Location" onChange={handleChange} style={inputStyle}/>
      <input name="contact" placeholder="Contact" onChange={handleChange} style={inputStyle}/>

      <select 
  name="status" 
  onChange={handleChange}
  style={{
    width:"100%",
    padding:"10px",
    margin:"10px 0",
    borderRadius:"5px",
    border:"1px solid #ccc"
  }}
>
  <option value="">-- Select Status --</option>
  <option value="LOST">LOST</option>
  <option value="FOUND">FOUND</option>
</select>
      
<select 
  name="category" 
  onChange={handleChange} 
  style={{
    width:"100%",
    padding:"10px",
    margin:"10px 0",
    borderRadius:"5px",
    border:"1px solid #ccc"
  }}
>
  <option value="">-- Select Category --</option>
  <option value="Electronics">Electronics</option>
  <option value="Jewelry">Jewelry</option>
  <option value="Books">Books</option>
  <option value="Others">Others</option>
</select>

      <button style={btnPrimary} onClick={handleSubmit}>Submit</button>

      {showMatchBtn && (
        <button style={btnSuccess} onClick={handleMatch}>
          Find Match
        </button>
      )}

    </div>
  );
}

const inputStyle = {
  width:"100%",
  padding:"10px",
  margin:"8px 0",
  borderRadius:"5px",
  border:"1px solid #ccc"
};

const btnPrimary = {
  width:"100%",
  padding:"10px",
  marginTop:"10px",
  background:"#3498db",
  color:"#fff",
  border:"none",
  borderRadius:"5px"
};

const btnSuccess = {
  width:"100%",
  padding:"10px",
  marginTop:"10px",
  background:"#2ecc71",
  color:"#fff",
  border:"none",
  borderRadius:"5px"
};

export default AddItem;





// import React, { useState } from "react";
// import { addItem, matchItems } from "./api";


// function AddItem({ setMatches, setUserItem }) {

//   const [item, setItem] = useState({
//     name: "",
//     description: "",
//     location: "",
//     status: "LOST",
//     contact: ""
//   });

//   const [showMatchBtn, setShowMatchBtn] = useState(false);

//   const handleChange = (e) => {
//     setItem({ ...item, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     addItem(item).then(() => {
//       setUserItem(item);   // ⭐ store user item
//       setShowMatchBtn(true);
//     });
//   };

//   const handleMatch = () => {
//     matchItems(item.name, item.status).then(res => {
//       setMatches(res.data);
//     });
//   };

//   return (
//     <div>

//       <h2>Report Item</h2>

//       <input name="name" placeholder="Item Name" onChange={handleChange}/><br/><br/>
//       <input name="description" placeholder="Description" onChange={handleChange}/><br/><br/>
//       <input name="location" placeholder="Location" onChange={handleChange}/><br/><br/>
//       <input name="contact" placeholder="Contact" onChange={handleChange}/><br/><br/>

//       <select name="status" onChange={handleChange}>
//         <option value="LOST">LOST</option>
//         <option value="FOUND">FOUND</option>
//       </select>

//       <br/><br/>

//       <button onClick={handleSubmit}>Submit</button>

//       <br/><br/>

//       {showMatchBtn && (
//         <button onClick={handleMatch}>Match</button>
//       )}

//     </div>
//   );
// }
// export default AddItem;