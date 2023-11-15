import { Modal, Icon } from 'atomize'
const ForUModal = ({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean
  onClose: () => void
  data: {
    name: string
    text: string
  }
}) => {
  // useEffect(() => {
  //   const queryParameters = new URLSearchParams(window.location.search)
  //   const id = queryParameters.get('id')
  //   if (id && window.data) {
  //     const data = window.data.find((each) => each.includes(id))
  //     if (data) {
  //       setName(data[1])
  //       setText(data[2])
  //     }
  //   }
  // }, [window.location.search, window.data])

  return (
    <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md">
      <Icon name="Cross" pos="absolute" top="1rem" right="1rem" size="30px" onClick={onClose} cursor="pointer" />
      <div className="min-h-[300px] max-h-[65vh] overflow-y-auto">
        <h1 className="text-[#AC8A5F] text-xl">Dear {data.name}</h1>
        <p className="text-[#AC8A5F] text-sm mt-3" dangerouslySetInnerHTML={{ __html: `<div>${data.text}</div>` }}></p>
      </div>
    </Modal>
  )
}
export default ForUModal
