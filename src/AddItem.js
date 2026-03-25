import React, { useState } from "react";
import { addItem, matchItems } from "./api";


function AddItem({ setMatches, setUserItem }) {

  const [item, setItem] = useState({
    name: "",
    description: "",
    location: "",
    status: "LOST",
    contact: ""
  });

  const [showMatchBtn, setShowMatchBtn] = useState(false);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addItem(item).then(() => {
      setUserItem(item);   // ⭐ store user item
      setShowMatchBtn(true);
    });
  };

  const handleMatch = () => {
    matchItems(item.name, item.status).then(res => {
      setMatches(res.data);
    });
  };

  return (
    <div>

      <h2>Report Item</h2>

      <input name="name" placeholder="Item Name" onChange={handleChange}/><br/><br/>
      <input name="description" placeholder="Description" onChange={handleChange}/><br/><br/>
      <input name="location" placeholder="Location" onChange={handleChange}/><br/><br/>
      <input name="contact" placeholder="Contact" onChange={handleChange}/><br/><br/>

      <select name="status" onChange={handleChange}>
        <option value="LOST">LOST</option>
        <option value="FOUND">FOUND</option>
      </select>

      <br/><br/>

      <button onClick={handleSubmit}>Submit</button>

      <br/><br/>

      {showMatchBtn && (
        <button onClick={handleMatch}>Match</button>
      )}

    </div>
  );
}
export default AddItem;