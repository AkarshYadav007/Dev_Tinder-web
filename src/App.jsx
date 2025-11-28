import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./Profile"
import Login from "./Login"
import Body from "./Body"


function App() {

  return (
    <div>
      <BrowserRouter basename="/">
      <Routes>
        <Route path = "/" element = {<Body/>}>
          <Route path = "/login" element = {<Login/>}></Route>
          <Route path = "/profile" element = {<Profile/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
