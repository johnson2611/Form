import React from "react"
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import "tachyons"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Signin from "./components/Signin"



const App = () => {
  return(
      <>
      <Router>
          <Navbar/>
          <Switch>
              <Route path= '/' components = {Signup} exact>
                  <Signup/>
              </Route>
              <Route path= '/Signin' components = {Signin} exact>
                  <Signin/>
              </Route>
          </Switch>
     </Router>
      </>
  )
}
export default App



// function App() {
//   return (
//     <div className="App">
//               <Navbar/>
//               <Signup/>
//       </div>
//   )
// }

// export default App;