import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/IndexPage/LandingPage';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' Component={LandingPage} />
    </Routes>
    </>
  )
}

export default App
