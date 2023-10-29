import { Div, Button, Modal, Icon, Text } from 'atomize'
import ImageViewer from 'react-simple-image-viewer'
import { useState, useCallback } from 'react'
const PhotosModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const images = [
    'https://i.imgur.com/9T7EB35.jpg',
    'https://i.imgur.com/TQwIPzJ.jpg',
    'https://i.imgur.com/BNA3xvQ.jpg',
    'https://i.imgur.com/EXkAFRf.jpg',
    'https://i.imgur.com/T0Wa1Ev.jpg',
    'https://i.imgur.com/Hj5YpN3.jpg',
    'https://i.imgur.com/cVdGCGQ.jpg',
    'https://i.imgur.com/ye8STyC.jpg',
    'https://i.imgur.com/Tg25jER.jpg',
    'https://i.imgur.com/gPAGnOq.jpg',
    'https://i.imgur.com/hMsu5rA.jpg',
    'https://i.imgur.com/QDpmUlY.jpg',
    'https://i.imgur.com/coh6vVo.jpg',
    'https://i.imgur.com/oU2p92q.jpg',
    'https://i.imgur.com/hatBPqx.jpg',
    'https://i.imgur.com/aZTCWFU.jpg',
    'https://i.imgur.com/RbHiwNI.jpg',
    'https://i.imgur.com/T6auYaL.jpg',
    'https://i.imgur.com/vH6lTD6.jpg',
    'https://i.imgur.com/2XvlYrr.jpg',
    'https://i.imgur.com/FN7QYLw.jpg',
    'https://i.imgur.com/sZbDv9p.jpg',
    'https://i.imgur.com/tgd5Axt.jpg',
    'https://i.imgur.com/Jmidf2V.jpg',
    'https://i.imgur.com/eOIjSPb.jpg',
    'https://i.imgur.com/KVafkZP.jpg',
    'https://i.imgur.com/DkdU3d4.jpg',
    'https://i.imgur.com/CSF98oF.jpg',
    'https://i.imgur.com/N5b5zsD.jpg',
    'https://i.imgur.com/DjRU4IE.jpg',
    'https://i.imgur.com/bxXENnz.jpg',
  ]
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
      <div className="flex mt-2">
        <Button onClick={onClose} bg="gray200" textColor="medium" m={{ r: '1rem' }}>
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Yes, Submit
        </Button>
      </div>
    </Modal>
  )
}
export default PhotosModal
