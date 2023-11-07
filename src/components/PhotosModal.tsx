import { Div, Modal, Icon, Text } from 'atomize'
import ImageViewer from 'react-simple-image-viewer'
import { useState, useCallback } from 'react'
const PhotosModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const images = new Array(56)
    .fill(true)
    .map((_, i) => `https://jiahao1123.s3.ap-northeast-2.amazonaws.com/weiju/${i + 1}.jpg`)
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
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
          <div className="flex bg-slate-100 p-2">
            <img
              className="cursor-pointer object-contain"
              src={src}
              onClick={() => openImageViewer(index)}
              width="300"
              key={index}
              style={{ margin: '2px' }}
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
