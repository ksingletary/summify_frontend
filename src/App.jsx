import Hero from './components/Hero'
import Demo from './components/Demo'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import './App.css'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>
      </div>   

      <div className='app'>
        <Hero />
        <Demo />
      </div> 

        <BrowserRouter>
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
            </Routes>
            </div>
         </div>
        </BrowserRouter>
        
    </main>
    
  )
}

export default App;