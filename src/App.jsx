import Header from './components/header/Header'
import Home from './pages/Home'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='app h-screen w-screen flex flex-col justify-between items-center'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
