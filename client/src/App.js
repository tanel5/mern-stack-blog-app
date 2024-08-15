import "./App.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import AddNewBlog from "./pages/add-blog";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-blog" element={<AddNewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
