import { Button, Modal, Icon, Anchor } from 'atomize'
const MapModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="start" rounded="md">
      <div className="overflow-scroll max-h-[70vh] pr-3">
        <Icon name="Cross" pos="absolute" top="1rem" right="1rem" size="30px" onClick={onClose} cursor="pointer" />
        <div className="text-[#AC8A5F] flex-col gap-3">
          <h1>交通資訊</h1>
          <div className="flex gap-3 mt-3">
            <div className="flex align-center">
              <img className="object-contain" width={`250px`} src={`/regent_Taipei_logo.png`}></img>
            </div>
            <div>晶華酒店 晶華會Regent Taipei Noble House 1F 台北市中山區中山北路二段 39 巷 3 號 (02) 2523-8000</div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4063396716915!2d121.52160701210519!3d25.054213277710854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a968f68729e7%3A0x6e3f6d2374968eaa!2z5Y-w5YyX5pm26I-v6YWS5bqX!5e0!3m2!1szh-TW!2stw!4v1691564161905!5m2!1szh-TW!2stw"
              width="100%"
              height="350"
              loading="lazy"
            ></iframe>
            <div className="my-3 flex justify-center ">
              <Anchor
                href="https://www.google.com/maps/dir//%E5%8F%B0%E5%8C%97%E6%99%B6%E8%8F%AF%E9%85%92%E5%BA%97+104%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E4%B8%AD%E5%B1%B1%E5%8C%97%E8%B7%AF%E4%BA%8C%E6%AE%B539%E5%B7%B73%E8%99%9F/@25.0541906,121.4417858,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3442a968f68729e7:0x6e3f6d2374968eaa!2m2!1d121.5241873!2d25.0542133?entry=ttu"
                target="_blank"
              >
                <Button
                  h="2rem"
                  p={{ x: '0.75rem' }}
                  textSize="caption"
                  textColor="gray100"
                  hoverTextColor="info900"
                  bg="black"
                  rounded="circle"
                  hoverBg="info200"
                  border="1px solid"
                  borderColor="info700"
                  hoverBorderColor="info900"
                  m={{ r: '0.5rem' }}
                >
                  <img height={`15`} width={`15`} src="/maps15_bnuw3a_32dp.ico"></img>
                  地圖導航
                </Button>
              </Anchor>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h2>高鐵</h2>
              <div>搭乘高鐵至台北站，並轉搭捷運至淡水線中山站3號出口，步行約6分鐘即可抵達。</div>
            </div>
            <div>
              <h2>開車資訊</h2>
              <div>行經中山高速公路於重慶北路交流道出口下交流道 - 至民族東路左轉 - 直走至林森北路右轉即可抵達。</div>
            </div>
            <div>
              <h2>捷運資訊</h2>
              <div>搭乘捷運淡水線(紅線)中山站3號出口，步行約6分鐘即可抵達。</div>
            </div>
            <div>
              <h2>公車資訊</h2>
              <div>
                公車：218、220、221、227、247、260、261、287、310、40、636、659，於國賓飯店站下車，步行約3分鐘即可抵達。
              </div>
            </div>
            <div>
              <h2>停車</h2>
              <div>飯店備有代客停車服務，同時於飯店地下4、5樓為貴賓專用停車場，方便來賓們使用。</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
export default MapModal
