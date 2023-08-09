import { Button, Modal, Icon } from 'atomize'
const MapModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="start" rounded="md">
      <Icon name="Cross" pos="absolute" top="1rem" right="1rem" size="16px" onClick={onClose} cursor="pointer" />
      <div className="text-[#AC8A5F] flex-col gap-3">
        <h1>交通資訊</h1>
        <div className="flex gap-3">
          <div>logo</div>
          <div>晶華酒店 晶華會Regent Taipei Noble House 1F 台北市中山區中山北路二段 39 巷 3 號 (02) 2523-8000</div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4063396716915!2d121.52160701210519!3d25.054213277710854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a968f68729e7%3A0x6e3f6d2374968eaa!2z5Y-w5YyX5pm26I-v6YWS5bqX!5e0!3m2!1szh-TW!2stw!4v1691564161905!5m2!1szh-TW!2stw"
            width="100%"
            height="350"
            loading="lazy"
          ></iframe>
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
        <div className="flex justify-center">
          <Button onClick={onClose} bg="info700">
            知道了
          </Button>
        </div>
      </div>
    </Modal>
  )
}
export default MapModal
