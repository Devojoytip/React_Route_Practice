import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Post from './components/pages/Post';
import Navbar from './components/Navbar';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import JoinLobby from './components/pages/joinLobby';
import StartPage from './components/pages/startPage';
import DisplayPage from './components/pages/displayPage';
import ResultPage from './components/pages/resultPage';
import SelectionPage from './components/pages/selectionPage';
import LobbyPage from './components/pages/lobbyPage';
import { Navigate } from 'react-router-dom';

function App() {
  // let isLogged=true;
  let isLogged=false;
  let data={
    'st':'login first '
  }
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route path="/" element={<h1>hello world!</h1>}></Route> */}
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/post" element={<Post></Post>} />
          <Route path="/lobby" element={<LobbyPage></LobbyPage>} />
          <Route path="/join-lobby" element={<JoinLobby></JoinLobby>} />
          <Route path="/start" element={<StartPage></StartPage>} />
          <Route path="/display-page" element={<DisplayPage></DisplayPage>} />
          <Route path="/result-page" element={<ResultPage></ResultPage>} />
          <Route path="/selection-page" element={<SelectionPage></SelectionPage>} />

          {/* Dynamic URL */}
          {/* this category or give anyname , can take any value */}
          <Route path="/post/:category" element={<Post></Post>} />
          <Route path="/post/:category/:id" element={<Post></Post>} />

          {/* No Match URL - 404 Page not Found */}
          <Route path='*' element={<h1>Erro 404 Page Not Found :( </h1>}></Route>

          {/* Conditional Route */}
          <Route path='/login'element={<Login></Login>} ></Route>
          <Route path='/dashboard'element={isLogged?<Dashboard></Dashboard>:<Navigate to='/login' replace state={data}></Navigate>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
