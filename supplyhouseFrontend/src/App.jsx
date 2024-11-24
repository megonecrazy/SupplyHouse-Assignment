import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import { HoursForm } from './component/HoursForm'
import { DashboardComponent} from './component/DashboardComponent'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {
  
  return (
    <>

<BrowserRouter>
          <Routes>
            <Route path='/' element={<DashboardComponent/>}></Route>
            <Route path='/HoursForm' element={<HoursForm/>}></Route>
          </Routes>
          
       </BrowserRouter>
    
    </>
  )
}

export default App
