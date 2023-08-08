import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faImage,
  faMapLocation,
  faChampagneGlasses,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { Image } from 'atomize'
const Footer = () => {
  return (
    <>
      <div className="flex static h-[200px] mt-10">

        <div className="absolute left-0 bottom-0">
          <Image src="/src/assets/left.png" />
        </div>
        <div className="absolute left-0 bottom-0">
          <Image src="/src/assets/right.png" />
        </div>
        <div className="h-full w-full text-xl z-10">
          <div className="grid gap-2 mx-10 grid-cols-4 text-center ">
            <div>
              <FontAwesomeIcon icon={faImage} />
              <div className="text-sm">Photos</div>
            </div>
            <div>
              <FontAwesomeIcon icon={faChampagneGlasses} />
              <div className="text-sm">Parents</div>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapLocation} />
              <div className="text-sm">Map</div>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="text-sm">For U</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer
