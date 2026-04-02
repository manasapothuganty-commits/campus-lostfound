import React from "react";
import { resolveItem } from "./api";  // ✅ import added

function MatchList({ matches, userItem }) {

  return (
    <div style={{maxWidth:"500px", margin:"auto"}}>

      <h2>Match Result</h2>

      {/* Your Item */}
      {userItem && (
        <div style={{
          border:"2px solid blue",
          padding:"15px",
          margin:"10px",
          borderRadius:"10px",
          background:"#ecf6fd"
        }}>
          <h3>Your Item</h3>
          <p><b>Name:</b> {userItem.name}</p>
          <p><b>Description:</b> {userItem.description}</p>
          <p><b>Location:</b> {userItem.location}</p>
          <p><b>Status:</b> {userItem.status}</p>
          <p><b>Contact:</b> {userItem.contact}</p>
        </div>
      )}

      {/* Match Result */}
      {matches.length === 0 ? (
        <h3 style={{color:"red"}}>No Match Found</h3>
      ) : (
        matches.map((m) => (   // ✅ m defined here
          <div key={m.id} style={{
            border:"2px solid green",
            padding:"15px",
            margin:"10px",
            borderRadius:"10px",
            background:"#eafaf1"
          }}>
            <h3>Matched Person</h3>

            <p><b>Name:</b> {m.name}</p>
            <p><b>Description:</b> {m.description}</p>
            <p><b>Location:</b> {m.location}</p>
            <p style={{color:"green"}}><b>Status:</b> {m.status}</p>
            <p><b>Contact:</b> {m.contact}</p>

            {/* ✅ Resolve button */}
            <button 
              onClick={() => resolveItem(m.id)}
              style={{
                marginTop:"10px",
                padding:"8px",
                background:"#e67e22",
                color:"#fff",
                border:"none",
                borderRadius:"5px"
              }}
            >
              Mark as Resolved
            </button>
            <button 
  onClick={() => window.location.reload()}
  style={{
    marginTop:"20px",
    padding:"10px",
    background:"#34495e",
    color:"#fff",
    border:"none",
    borderRadius:"5px"
  }}
>
  Search Again
</button>

          </div>
        ))
      )}

    </div>
  );
}

export default MatchList;



// import React from "react";

// function MatchList({ matches, userItem }) {

//   if(matches.length === 0){
//     return <h3>No Match Found</h3>;
//   }

//   return (
//     <div>

//       <h2>Match Found ✅</h2>

//       {/* 🔹 Your Item */}
//       {userItem && (
//         <div style={{
//           border:"2px solid blue",
//           padding:"10px",
//           margin:"10px",
//           borderRadius:"10px"
//         }}>
//           <h3>Your Item</h3>
//           <p><b>Name:</b> {userItem.name}</p>
//           <p><b>Description:</b> {userItem.description}</p>
//           <p><b>Location:</b> {userItem.location}</p>
//           <p><b>Status:</b> {userItem.status}</p>
//           <p><b>Your Contact:</b> {userItem.contact}</p>
//         </div>
//       )}

//       {/* 🔹 Matched Items */}
//       {matches.map((m) => (
//         <div key={m.id} style={{
//           border:"2px solid green",
//           padding:"10px",
//           margin:"10px",
//           borderRadius:"10px",
//           background:"#f0fff0"
//         }}>
//           <h3>Matched Person</h3>
//           <p><b>Name:</b> {m.name}</p>
//           <p><b>Description:</b> {m.description}</p>
//           <p><b>Location:</b> {m.location}</p>
//           <p><b>Status:</b> {m.status}</p>
//           <p><b>Contact:</b> {m.contact}</p>
//         </div>
//       ))}

//     </div>
//   );
// }

// export default MatchList;