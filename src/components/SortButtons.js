import React from "react";

function SortButtons({sortHandleHighLow, sortHandleLowHigh, sortHighLow, sortLowHigh}) {
  return (


    <div style={{ textAlign: "center", padding: 20 }}>

      {sortHighLow ? (
        <button onClick={sortHandleHighLow} style={{ color: "blue"}}>Sort Plants (High to Low) ⬆️</button>
      ) : (
        <button onClick={sortHandleHighLow}>Sort Plants (High to Low) ⬆️</button>
      )}

      <br></br>
      <br></br>

      {sortLowHigh ? (
        <button onClick={sortHandleLowHigh} style={{ color: "blue"}}>Sort Plants (Low to High) ⬇️</button>
      ) : (
        <button onClick={sortHandleLowHigh}>Sort Plants (Low to High) ⬇️</button>
      )}

    </div>
  );
}

export default SortButtons;




