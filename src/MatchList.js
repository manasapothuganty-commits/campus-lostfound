import React from "react";

function MatchList({ matches, userItem }) {

  if(matches.length === 0){
    return <h3>No Match Found</h3>;
  }

  return (
    <div>

      <h2>Match Found ✅</h2>

      {/* 🔹 Your Item */}
      {userItem && (
        <div style={{
          border:"2px solid blue",
          padding:"10px",
          margin:"10px",
          borderRadius:"10px"
        }}>
          <h3>Your Item</h3>
          <p><b>Name:</b> {userItem.name}</p>
          <p><b>Description:</b> {userItem.description}</p>
          <p><b>Location:</b> {userItem.location}</p>
          <p><b>Status:</b> {userItem.status}</p>
          <p><b>Your Contact:</b> {userItem.contact}</p>
        </div>
      )}

      {/* 🔹 Matched Items */}
      {matches.map((m) => (
        <div key={m.id} style={{
          border:"2px solid green",
          padding:"10px",
          margin:"10px",
          borderRadius:"10px",
          background:"#f0fff0"
        }}>
          <h3>Matched Person</h3>
          <p><b>Name:</b> {m.name}</p>
          <p><b>Description:</b> {m.description}</p>
          <p><b>Location:</b> {m.location}</p>
          <p><b>Status:</b> {m.status}</p>
          <p><b>Contact:</b> {m.contact}</p>
        </div>
      ))}

    </div>
  );
}

export default MatchList;