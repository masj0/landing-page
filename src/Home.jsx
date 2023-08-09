import React from "react";
import Navbar from "./component/Navbar";
import CardComponent from "./component/Card";
import { Input, Select, Button } from "@chakra-ui/react";

function Home() {
  return (
    <div className="flex flex-col ">
      <Navbar></Navbar>
      {/* container */}
      <div className="mx-20 my-10 space-y-7  p-3 rounded-xl">
        <div className="flex flex-row gap-3 border-2  py-3 px-3 rounded-lg">
          <Input
            width={"300px"}
            placeholder="Search Product"
            colorScheme="white"
          ></Input>
          <Select placeholder="Select category" width={"300px"}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Button colorScheme="teal">Search</Button>
        </div>
        <div className="flex flex-wrap gap-5 w-full justify-center items-center ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => (
            <CardComponent key={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
