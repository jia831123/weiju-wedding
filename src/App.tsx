import './App.css'
import Footer from './components/Footer'
import Context from './components/Context'

const App = () => {
  return (
    <>
      <div className="overflow-scroll h-full  scroll-container">
        <div className=" w-full flex flex-col bg-[#d97760] justify-between overflow-auto bg-center bg-no-repeat bg-cover bg-[url('/iphon14forjia.png')] xl:bg-[url('/macforjia.png')]">
          <Context />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
