import './App.css'
import Context from './components/Context'

const App = () => {
  return (
    <>
      <div className="overflow-scroll h-full  scroll-container">
        <div className="h-full w-full flex flex-col bg-[#d97760] justify-between overflow-auto bg-center bg-no-repeat bg-cover ">
          <Context />
        </div>
      </div>
    </>
  )
}

export default App
