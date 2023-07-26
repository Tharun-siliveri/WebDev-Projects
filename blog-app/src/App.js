// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlesPage';
import NotFound from './pages/NotFound';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/articles" element={<ArticlesListPage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
