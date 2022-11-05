import "./App.css";
import RegisterUser from "./registerUser";
import LoginUser from "./LoginUser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import HomePage from "./homePage";


function App() {
 

  return (
    <div className="App">
      <Router>
        <HomePage/>
      <Routes>
        {/* <Route exact path="/" element={<HomePage/>} /> */}
        <Route path="/SignIn" element={<RegisterUser/>}/>
        <Route path="/LogIn" element={<LoginUser/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
