import { Modal, Icon } from 'atomize'
import { useEffect, useState } from 'react'
const ForUModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [name, setName] = useState('好朋友')
  const [text, settext] = useState('邀請你能前來')
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get('id')
    if (id && window.data) {
      const datas = window.data.find((each) => each.includes(id)) as any
      if (datas) {
        setName(datas[1])
        settext(datas[2])
      }
    }
  }, [window.location.search, window.data])

  return (
    <Modal isOpen={isOpen} onClose={onClose} align="start" rounded="md">
      <Icon name="Cross" pos="absolute" top="1rem" right="1rem" size="16px" onClick={onClose} cursor="pointer" />
      <div className="min-h-[300px]">
        <h1 className="text-[#AC8A5F] text-xl">Dear {name}</h1>
        <p className="text-[#AC8A5F] text-sm mt-3">{text}</p>
      </div>
    </Modal>
  )
}
export default ForUModal
