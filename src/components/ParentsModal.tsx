import { Button, Modal, Icon } from 'atomize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'
const ParentsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="start" rounded="md">
      <Icon name="Cross" pos="absolute" top="1rem" right="1rem" size="20px" onClick={onClose} cursor="pointer" />
      <div className="flex flex-col gap-3">
        <div>
          <div className="flex gap-3 text-[#AC8A5F] justify-around text-center">
            <div>
              <div>
                <div>Groom</div>
                <div>李廷峰</div>
              </div>
              <div>
                <div>Groom’s parents</div>
                <div>李新和 李碧珠</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="m-auto">
                <FontAwesomeIcon icon={faChampagneGlasses} />
              </div>
            </div>
            <div>
              <div>
                <div>陳薇宇</div>
                <div>Bride</div>
              </div>
              <div>
                <div>陳照仁 林秀蓉</div>
                <div>Bride's parents</div>
              </div>
            </div>
          </div>
          <div className="mt-3 text-[#AC8A5F] text-center">誠摯邀請您參加我們的結婚囍宴！</div>
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
export default ParentsModal
