import React, { useState } from "react";
import "./App.css"


/*The convention for creating a state variable with useState() is to name the function
 set[VariableName]. So if the variable is subscribed, the function will be setSubscribed().
 */

 function App() {
	const [subscribed, setSubscribed] = useState(false);
	const [alerts, setAlerts] = useState(false);
  
	return (
	  <section>
		<p>Please click to subscribe to my updates!</p>
		<button onClick={() => setSubscribed(!subscribed)}>
		  {subscribed ? "Unsubscribe" : "Subscribe"}
		</button>
		<button onClick={() => setAlerts(!alerts)}>
		  {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
		</button>
	  </section>
	);
  }
  
  export default App;