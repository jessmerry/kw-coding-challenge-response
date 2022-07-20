import './App.css';
import { LowerImpactPurchases, EachCompany } from './components/LowerImpactPurchases';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="EachCompany" element={<EachCompany />}></Route>
        <Route path="/" element={<LowerImpactPurchases />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
