import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Main from './Main';
import Msg from './Msg';
import ThankYou from './ThankYou';

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path ="/" element={<Main/>}/>
              <Route path ="/thankyou" element={<ThankYou/>}/>
              <Route path ="/msg" element={<Msg/>}/>
          </Routes>
      </Router>
  );
}

export default App;
