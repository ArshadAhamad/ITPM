import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {
      return(
        <Router>
          <Switch>
          <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/Login">
              <Login/>
            </Route>
            <Route path="/Register">
              <Register/>
            </Route>
            <Route path="/Profile/:username">
              <Profile/>
            </Route>
            
          </Switch>
        </Router>
      )
   
  
}

export default App;
