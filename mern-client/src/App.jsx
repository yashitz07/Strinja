
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'
import MyFooter from './component/MyFooter'

function App() {


  return (
    <>
    <div className="bg-fuchsia-50">
    <Navbar/>
      <div className='min-h-screen'>
      <Outlet/>
      </div>
      <MyFooter/>
    </div>
      
    </>
  )
}

export default App
