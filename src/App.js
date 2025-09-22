import Landing from "./Pages/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
