import Footer from './Footer'

const Context = () => {
  return (
    <>
      <div className="relative h-full">
        <div className="hidden absolute w-full bottom-0">
          <div className="h-[100px] w-full bg-[#BA5B4B] "></div>
          <div className="h-[50px] w-full bg-[#BA5B4B] "></div>
        </div>
        <div className="relative  grid grid-cols-1 md:grid-cols-2 h-full md:overflow-hidden overflow-x-hidden z-50">
          <div className="absolute bottom-0 w-full h-[150px] md:h-[100px] ">
            <div className="relative h-full">
              <div className="h-[220%] md:h-[300%] absolute  left-[-25%] md:left-0 bottom-[10%] md:bottom-[-50%] w-[150%] md:w-full rounded-[50%] bg-[#BA5B4B] "></div>
              <div className="h-full bottom-0  bg-[#BA5B4B]">2</div>
            </div>
          </div>
          <div className=" flex justify-center z-50">
            <div className="max-w-[320px] m-auto h-full flex items-center">
              <div className="flex flex-col  ">
                <div>
                  <div className="text-xl text-center font-black mt-10 mb-5 text-white tracking-[5px]">
                    <div>WEDDING </div>
                    <div>INVITATION</div>
                  </div>
                  <div className=" block md:hidden">
                    <div className="flex justify-center">
                      <img className="h-[250px]" src="/people.png" />
                    </div>
                  </div>
                  <div className="font-pinyon my-3 text-xl">
                    <div className="text-center text-white">Tingfeng & Weiyu</div>
                  </div>
                  <div className="text-center font-bold text-white">
                    <div>2023.12.10</div>
                    <div>晚宴 17:30 準時入席</div>
                    <div>晶華酒店</div>
                    <div>晶華會Regent Taipei Noble House 1F</div>
                    <div>台北市中山區中山北路二段 39 巷 3 號</div>
                    <div>(02) 2523-8000</div>
                  </div>
                </div>

                <Footer />
              </div>
            </div>
          </div>

          <div className="hidden md:block z-20">
            <div className="flex items-center h-full item-center z-20">
              <img className="h-[600px]" src="/people.png" />
            </div>
          </div>
          <img className="absolute bottom-0 left-0 max-h-[200px] object-contain" src="/left.png" />

          <img className="absolute bottom-0 right-0 max-h-[200px]" src="/right.png" />
        </div>
      </div>
    </>
  )
}
export default Context
