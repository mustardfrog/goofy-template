import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import CreateUsers from "./components/CreateUsers";
import ShowUsers from "./components/ShowUsers";
import UpdateUsers from "./components/UpdateUsers";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ShowUsers />} />
          <Route path="/update-user" element={<UpdateUsers />} />
          <Route path="/create-user" element={<CreateUsers />} />
          <Route path="/user-detail" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
