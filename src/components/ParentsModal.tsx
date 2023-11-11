import { Modal, Icon } from 'atomize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'
const ParentsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} m={{ y: '10rem', x: { xs: '1rem', lg: 'auto' } }} rounded="md">
      <Icon name="Cross" pos="absolute" top="1rem" right="1rem" size="30px" onClick={onClose} cursor="pointer" />
      <div className="flex flex-col gap-3">
        <div>
          <div className="flex gap-3 text-[#AC8A5F] justify-around text-center">
            <div>
              <div className="m-3">
                <div className="font-pinyon">Groom</div>
                <div>李廷峰</div>
              </div>
              <div className="m-3">
                <div className="font-pinyon">Groom’s parents</div>
                <div>李新和 李碧珠</div>
              </div>
            </div>
            <div className="flex items-center text-xl">
              <div className="m-auto">
                <FontAwesomeIcon icon={faChampagneGlasses} />
              </div>
            </div>
            <div>
              <div className="m-3">
                <div className="font-pinyon">Bride</div>
                <div>陳薇宇</div>
              </div>
              <div className="m-3">
                <div className="font-pinyon">Bride's parents</div>
                <div>陳照仁 林秀蓉</div>
              </div>
            </div>
          </div>
          <div className="mt-3 text-[#AC8A5F] text-center">誠摯邀請您參加我們的結婚囍宴！</div>
        </div>
      </div>
    </Modal>
  )
}
export default ParentsModal
