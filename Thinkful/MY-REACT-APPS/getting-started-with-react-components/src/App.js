import "./App.css"
import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
import Footer from "./Footer";
  
  function App() {
    return (
      <>
        <Header />
        <WelcomeBack name = "Joe" adjective = "funny"/>
        <WelcomeBack name = "Anna" adjective = "clever"/>
        <WelcomeBack />
        <Footer />
    
      </>
    );
  }




export default App;