import { Div, Modal, Icon, Text } from 'atomize'
import ImageViewer from 'react-simple-image-viewer'
import { useState, useCallback, useEffect } from 'react'
const PhotosModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const images = new Array(56)
    .fill(true)
    .map((_, i) => `https://jiahao1123.s3.ap-northeast-2.amazonaws.com/weiju/${i + 1}.jpg`)
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  useEffect(() => {
    console.log('init')
    function onEnterView(entries: any, observer: any) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const img = entry.target
          img.setAttribute('src', img.dataset.src)
          observer.unobserve(img)
        }
      }
    }
    const watcher = new IntersectionObserver(onEnterView)
    const lazyImages = document.querySelectorAll('img.lazy')
    for (const image of lazyImages) {
      watcher.observe(image)
    }
  }, [isOpen])
  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])
  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md">
      <Icon name="Cross" pos="absolute" top="1rem" right="1rem" size="16px" onClick={onClose} cursor="pointer" />
      <Div d="flex" m={{ b: '4rem' }}>
        <Text p={{ l: '0.5rem', t: '0.25rem' }} textSize="subheader">
          Tingfeng & Weiyu Photo
        </Text>
      </Div>
      <div className="grid grid-cols-3 gap-1 h-[400px] overflow-scroll">
        {images.map((src, index) => (
          <div className="flex bg-slate-100 p-2" key={index}>
            <img
              className="cursor-pointer object-contain img lazy"
              data-src={src}
              onClick={() => openImageViewer(index)}
              key={index}
              style={{ margin: '2px', height: '196px', width: '130px' }}
              loading="lazy"
            />
          </div>
        ))}
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </Modal>
  )
}
export default PhotosModal
