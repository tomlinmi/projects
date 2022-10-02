import React, { useState } from "react";


  function CoinTossCounter() {
    const [counts, setCounts] = useState({ H: 0, T: 0 });
   
    const handleClick = (value) => {
    setCounts({
          ...counts,
          [value]: counts[value] + 1,
        });
      };
console.log(counts);



    return (
      <section>
        <div>
          <button onClick={() => handleClick("H")}>Heads</button>
          <button onClick={() => handleClick("T")}>Tails</button>
         
        </div>
        <ul>
            <li>Heads: {counts["H"]}</li>
            <li>Tails: {counts["T"]}</li>
            </ul>

      </section>
    );
  }


  
  export default CoinTossCounter;