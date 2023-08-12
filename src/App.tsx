import './App.css'
import Footer from './components/Footer'
import Context from './components/Context'

const App = () => {
  return (
    <>
      <div className="h-[844px] w-full flex flex-col bg-[#d97760] justify-between overflow-auto bg-no-repeat bg-cover bg-[url('/iphon14forjia.png')]">
        <Context />
        <Footer />
      </div>
    </>
  )
}

export default App
