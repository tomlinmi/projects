import "./WelcomeBack.css";

function WelcomeBack({name = "valued customer", adjective="nice"}) {
    return (
    <p>
        Welcome back, {adjective} {name}!
        </p>
    );
  }

  export default WelcomeBack;