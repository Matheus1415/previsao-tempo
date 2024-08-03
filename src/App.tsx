import { Box, Flex} from "@chakra-ui/react";
import { BoxMain } from "./components/BoxMain";
import { SearchInput } from "./components/SechInput";
import { BoxCard } from "./components/BoxCard";


function App() {
  return (
      <Flex textAlign="center" fontSize="xl" bg="#c089f7ed" minH={200} direction="column" align="center" justifyContent="center" p={10} h="100vh" gap={10} w="100vw">
        <BoxMain />
        <SearchInput/>
        <BoxCard/>
      </Flex>
  );
}

export default App;
