import './App.css';
import { Button } from '@chakra-ui/react';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <div className="App">
      <Route path="/" Component={Homepage} exact></Route>
      <Route path="/chat/api" Component={ChatPage}></Route>
    </div>
  );
}

export default App;
