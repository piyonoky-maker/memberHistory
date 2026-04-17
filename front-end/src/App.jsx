import { Route, Routes } from 'react-router';

import HomePage from './components/pages/A';
import ReportMemInfoPage from './components/pages/B';
//import ReportMyHistory from './components/pages/ReportMyHistory';
//import ReportTask from './components/pages/ReportTask';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ReportMemInfoList' element={<HomePage />} />

        {/* 
        <Route path='/ReportMemInfoPage' element={<ReportMemInfoPage />} />
        
        <Route path='/ReportMyHistory' element={<ReportMyHistory />} />
        <Route path='/ReportTask' element={<ReportTask />} />
        */}
      </Routes>
    </>
  );
};

export default App;
