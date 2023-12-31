import './App.css';
import { Button } from '@chakra-ui/react';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';
import { Route } from 'react-router-dom'; // imported for routing
function App() {
  return (
    <div className="App">
    <Route path = "/" component = {Homepage} exact></Route>
    <Route path = "/chat" component = {ChatPage}></Route>
      
    </div>
  );
}

export default App;
