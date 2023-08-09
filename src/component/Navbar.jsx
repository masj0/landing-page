import { useState } from "react";
import { Input, Text, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const session = false;
  return (
    <nav className="w-full bg-teal-700 py-3 px-20 flex flex-row justify-between items-center sticky top-0 z-50">
      <div className="flex flex-row justify-center items-center gap-10">
        <span className="bg-red-400 rotate-3 border p-1">
          <Text
            fontSize={"17px"}
            fontWeight={"bold"}
            color={"white"}
            className="-rotate-3"
          >
            Toko Murah Meriah
          </Text>
        </span>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        {!session ? (
          <Button
            colorScheme="gray"
            color={"white"}
            variant="outline"
            onClick={onOpen}
          >
            Login
          </Button>
        ) : (
          <span>About Me</span>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="w-full flex justify-center items-center">
              <div className="max-w-xl  p-3 rounded-xl flex justify-center items-center flex-col space-y-4">
                <Text fontSize="30px" color="teal" fontWeight={"bold"}>
                  Login ke halaman
                </Text>
                <Text textAlign={"center"} fontSize={"xs"} color={"gray"}>
                  Untuk melanjutkan, silahkan login ke akun Anda. Dengan
                  melakukan login, Anda akan dapat mengakses berbagai layanan
                  dan fitur yang kami sediakan.
                </Text>
                <form action="" className="space-y-4">
                  <Input
                    placeholder="Input Email"
                    required
                    name="input-email"
                  ></Input>
                  <Button colorScheme="teal" width={"full"}>
                    Send email verification
                  </Button>
                </form>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </nav>
  );
}

export default Navbar;
