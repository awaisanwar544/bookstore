import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="App-header" />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
