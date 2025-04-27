import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import AppRoutes from './routes'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
