import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./view/pages/Login";
import Home from "./view/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/:login">
            <Route index element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
