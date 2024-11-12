import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <div className='min-h-screen'>
          <Home />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
