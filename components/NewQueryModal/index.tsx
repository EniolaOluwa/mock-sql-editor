import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Input,
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NewQueryModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add A New Query</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Query Title</FormLabel>
            <Input placeholder='An Input' />

            <Textarea />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button variant='outline'>Save Query</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewQueryModal;
