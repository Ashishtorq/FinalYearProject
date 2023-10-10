import './App.css';
import { Button } from '@chakra-ui/react';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/chat/api" element={<h1>You are logged out !!</h1>}></Route>
    </div>
  );
}

export default App;
