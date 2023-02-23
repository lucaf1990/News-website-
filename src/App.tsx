import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMainNewsPage from "./Components/MyMainNewsPage";

import DetailArticle from "./Components/DetailArticle";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyMainNewsPage />} />
          <Route path="/Detail/:id" element={<DetailArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
