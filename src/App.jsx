import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Pages from './routing'

function App() {
  return (
    <>
      <Header />
      <main className="main-content test">
        <Pages/>
      </main>
      
      <Footer />
    </>
  )
}

export default App
