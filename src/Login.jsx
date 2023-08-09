import { useState } from "react";
import { Input, Button, Text } from "@chakra-ui/react";

function Login() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="max-w-xl border-2 p-3 rounded-xl flex justify-center items-center flex-col space-y-4">
        <Text fontSize="30px" color="teal" fontWeight={"bold"}>
          Login ke halaman
        </Text>
        <form action="" className="space-y-4">
          <Input placeholder="Input Email" required name="input-email"></Input>
          <Button colorScheme="teal" width={"full"}>
            Send email verification
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
