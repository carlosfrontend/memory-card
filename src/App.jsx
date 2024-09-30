import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
  <div className="app">
    <Header text='Memory Game' logoAltText= 'pokemon logo' />
    <Cards/>
    <Footer/>
  </div>
  )
}

export default App
