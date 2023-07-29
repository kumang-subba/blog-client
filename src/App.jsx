import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BlogContextProvider } from "./context/BlogContext";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <BlogContextProvider>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogDetail />} />
      </Routes>
    </BlogContextProvider>
  );
}

export default App;
