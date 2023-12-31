import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faMapLocation, faChampagneGlasses, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import MapModal from './MapModal'
import ForUModal from './ForUModal'
import ParentsModal from './ParentsModal'
import PhotosModal from './PhotosModal'
import useGoogleApi from '../hooks/useGoogleAPI'
const Footer = () => {
  const [isShowMap, setShowMap] = useState(false)
  const [isShowForU, setShowForU] = useState(false)
  const [forUData, setForUData] = useState({ name: '親愛的朋友', text: '我們誠摯的歡迎您' })
  const [isShowParents, setShowParents] = useState(false)
  const [isShowPhotos, setShowPhotos] = useState(false)
  const { getDataById, init } = useGoogleApi()
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get('id')
    if (!id) return
    init().then(() =>
      getDataById(id).then((res) => {
        console.log(res)
        const formateText = (text: string) => text.replace(/\n|\r\n/g, '<br/>')
        if (res)
          setForUData({
            ...res,
            text: formateText(res.text),
          })
      }),
    )
  }, [])
  return (
    <>
      <div className="flex relative">
        {/* <div className="absolute left-0 bottom-0">
          <Image src="/left.png" />
        </div>
        <div className="absolute left-0 bottom-0">
          <Image src="/right.png" />
        </div> */}

        <div className="h-full w-full text-xl z-10 mt-2 md:mt-[0] md:mb-10 text-white md:text-3xl">
          <div className="grid gap-5 md:gap-7 mx-10 md:mx-0 grid-cols-4 text-center ">
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
        <ForUModal isOpen={isShowForU} onClose={() => setShowForU(false)} data={forUData} />
        <ParentsModal isOpen={isShowParents} onClose={() => setShowParents(false)} />
        <PhotosModal isOpen={isShowPhotos} onClose={() => setShowPhotos(false)} />
      </div>
    </>
  )
}
export default Footer
