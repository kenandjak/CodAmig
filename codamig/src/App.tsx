import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./view/pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
