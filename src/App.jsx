import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import AppRoutes from './routes'

function App() {

  return (
    <div className='app font-inter h-screen w-screen flex flex-col justify-between items-center'>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
