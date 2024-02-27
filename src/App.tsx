import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MatchingList from './pages/MatchingList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/matchingList" element={<MatchingList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
