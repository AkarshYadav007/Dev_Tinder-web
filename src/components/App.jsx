import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Body from "./Body";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Feed from "./Feed";
import Connections from "./Connections";
import Requests from "./Requests";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>

          {/* PUBLIC ROUTE */}
          <Route path="/login" element={<Login />} />

          {/* PROTECTED ROUTES */}
          <Route path="/" element={<Body />}>
            <Route index element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="connections" element={<Connections />} />
            <Route path="requests" element={<Requests />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
