import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faMapLocation, faChampagneGlasses, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Image } from 'atomize'
import { useState } from 'react'
import MapModal from './MapModal'
import ForUModal from './ForUModal'
import ParentsModal from './ParentsModal'
import PhotosModal from './PhotosModal'
const Footer = () => {
  const [isShowMap, setShowMap] = useState(false)
  const [isShowForU, setShowForU] = useState(false)
  const [isShowParents, setShowParents] = useState(false)
  const [isShowPhotos, setShowPhotos] = useState(false)
  return (
    <>
      <div className="flex static h-[200px] mt-10 ">
        <div className="absolute left-0 bottom-0">
          <Image src="/src/assets/left.png" />
        </div>
        <div className="absolute left-0 bottom-0">
          <Image src="/src/assets/right.png" />
        </div>
        <div className="h-full w-full text-xl z-10 text-white">
          <div className="grid gap-2 mx-10 grid-cols-4 text-center ">
            <div className="cursor-pointer" onClick={() => setShowPhotos(true)}>
              <FontAwesomeIcon icon={faImage} />
              <div className="text-sm">Photos</div>
            </div>
            <div className="cursor-pointer" onClick={() => setShowParents(true)}>
              <FontAwesomeIcon icon={faChampagneGlasses} />
              <div className="text-sm">Parents</div>
            </div>
            <div className="cursor-pointer" onClick={() => setShowMap(true)}>
              <FontAwesomeIcon icon={faMapLocation} />
              <div className="text-sm">Map</div>
            </div>
            <div className="cursor-pointer" onClick={() => setShowForU(true)}>
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="text-sm">For U</div>
            </div>
          </div>
        </div>
        <MapModal isOpen={isShowMap} onClose={() => setShowMap(false)} />
        <ForUModal isOpen={isShowForU} onClose={() => setShowForU(false)} />
        <ParentsModal isOpen={isShowParents} onClose={() => setShowParents(false)} />
        <PhotosModal isOpen={isShowPhotos} onClose={() => setShowPhotos(false)} />
      </div>
    </>
  )
}
export default Footer
