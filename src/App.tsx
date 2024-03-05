import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MatchingListPage from './pages/matching/MatchingList';
import MatchingPage from './pages/matching/Matching';
import CreateMatchingPage from './pages/matching/CreateMatchingPage';
import UpdateMatchingPage from './pages/matching/UpdateMatchingPage';
import SignUpPage from './pages/user/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to={'/matchingList'}>매칭보기</Link>
        <Link to={'/createMatching'}>매칭 만들기</Link>
        <Link to={'/signUp'}>회원가입</Link>
      </div>
      <Routes>
        <Route path="/matchingList" element={<MatchingListPage />}></Route>
        <Route path="/matching/:id" element={<MatchingPage />}></Route>
        <Route path="/createMatching" element={<CreateMatchingPage />}></Route>
        <Route path="/updateMatching" element={<UpdateMatchingPage />}></Route>
        <Route path="/signUp" element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
