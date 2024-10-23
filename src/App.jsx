import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';
import HomePage from './components/Home';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='app-container'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
