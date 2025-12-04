import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./Profile"
import Login from "./Login"
import Body from "./Body"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import Feed from "./Feed"
import Connections from "./Connections"
import Requests from "./Requests"


function App() {

  return (
    <div>
      <Provider store={appStore}>
      <BrowserRouter basename="/">
      <Routes>
        <Route path = "/" element = {<Body/>}>
          <Route path = "/" element = {<Feed/>}></Route>
          <Route path = "/login" element = {<Login/>}></Route>
          <Route path = "/profile" element = {<Profile/>}></Route>
          <Route path = "/connections" element = {<Connections/>}></Route>
          <Route path = "/requests" element = {<Requests/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
