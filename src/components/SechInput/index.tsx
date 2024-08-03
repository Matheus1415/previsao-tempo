import { Box, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useState } from "react";

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <Box
      w="100%"
      maxW="1200px"
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      p={2}
    >
      <InputGroup>
        <Input
          placeholder="Digite o nome da cidade..."
          variant="filled"
          bg="white"
          focusBorderColor="teal.500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          {searchTerm ? (
            <IconButton
              aria-label="Clear search"
              icon={<FaTimes />}
              onClick={handleClear}
              variant="ghost"
            />
          ) : (
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              onClick={() => console.log("Search initiated")}
              variant="ghost"
            />
          )}
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
