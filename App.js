import logo from './logo.svg';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import AuthpPage from './pages/Authpage/auth.component';
import RecordData from './RecordData/RecordData.components';
import RecordList from './RecordList/RecordList.component';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AuthpPage/>}/>
      <Route path="/record-data" element={<RecordData/>}/>
      <Route path="/record-list" element={<RecordList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
