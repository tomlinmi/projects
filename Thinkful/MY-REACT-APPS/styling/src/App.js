import "./App.css"
import Quote from "./Quote"
import WelcomeBack from "./WelcomeBack"

const quote = {
	text:
	  "I am great believer in luck, and I find the harder I work, the more I have of it.",
	author: "Thomas Jefferson",
  };
  
  function App() {
	return (
	  <>
		<WelcomeBack name="Joe" />
		<Quote quote={quote} />
	  </>
	);
  }
  
  export default App;