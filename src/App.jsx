import { Header } from "./features/layout/components/Header";
import { Footer } from "./features/layout/components/Footer";
import { Content } from "./features/layout/components/Content";
import { Props } from "./features/layout/components/Props";
import { Article } from "./features/layout/components/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/article" element={<Article />} />
            <Route path="/Props" element={<Props />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
