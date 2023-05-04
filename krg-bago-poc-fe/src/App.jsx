import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableDataTwo from './TableDataTwo.jsx';
import TableDataOne from './TableDataOne.jsx';
import { Home } from './Home.jsx';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/table-data-one" element={<TableDataOne />} />
        <Route path="/table-data-two" element={<TableDataTwo />} />
      </Routes>
    </Router>
  );
};
