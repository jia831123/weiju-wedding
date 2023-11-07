import Footer from './Footer'

const Context = () => {
  return (
    <>
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-xl text-center font-black mt-10 mb-5 text-white tracking-[5px]">
              <div>WEDDING </div>
              <div>INVITATION</div>
            </div>
            <div className=" block md:hidden">
              <div className="flex justify-center">
                <img className="h-[400px]" src="/people.png" />
              </div>
            </div>
            <div className="font-pinyon my-3 text-xl">
              <div className="text-center text-white">Tingfeng & Weiyu</div>
            </div>
            <div className="text-center font-bold text-white">
              <div>2023.12.10</div>
              <div>晚宴 18:00 準時入席</div>
              <div>晶華酒店</div>
              <div>晶華會Regent Taipei Noble House 1F</div>
              <div>台北市中山區中山北路二段 39 巷 3 號</div>
              <div>(02) 2523-8000</div>
            </div>
          </div>

          <Footer />
        </div>
        <div className="hidden md:block ">
          <div className="flex justify-center h-full item-center">
            <img className="h-[600px]" src="/people.png" />
          </div>
        </div>
      </div>
    </>
  )
}
export default Context
