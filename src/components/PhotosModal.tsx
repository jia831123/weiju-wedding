import { Div, Button, Modal, Icon, Text } from 'atomize'
const PhotosModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="start" rounded="md">
      <Icon name="Cross" pos="absolute" top="1rem" right="1rem" size="16px" onClick={onClose} cursor="pointer" />
      <Div d="flex" m={{ b: '4rem' }}>
        <Icon name="AlertSolid" color="warning700" m={{ t: '0.35rem', r: '0.5rem' }} />
        <Text p={{ l: '0.5rem', t: '0.25rem' }} textSize="subheader">
          Do you really want to submit the request.
        </Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button onClick={onClose} bg="gray200" textColor="medium" m={{ r: '1rem' }}>
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Yes, Submit
        </Button>
      </Div>
    </Modal>
  )
}
export default PhotosModal
