import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/header-component';
import Footer from './Components/Footer/footer-component';
import PersonalLife from './Routes/Personal Life/personal-life-component';
import ProfissionalCareer from './Routes/Professional Career/professional-career-component';
import Homepage from './Routes/HomePage/homepage-component';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/personal-life' element={<PersonalLife />} />
        <Route path='/professional-career' element={<ProfissionalCareer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
