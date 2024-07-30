import { Box, VStack } from "@chakra-ui/react";
import { AnimatedComponent } from "./components/AnimatedComponent";
import { SearchBar } from "./components/SearchBar";
import { WeatherInfo } from "./components/WeatherInfo";

function App() {
  return (
      <Box textAlign="center" fontSize="xl" >
        <VStack spacing={8}>
          <AnimatedComponent>
            <SearchBar />
          </AnimatedComponent>
          <WeatherInfo />
        </VStack>
      </Box>
  );
}

export default App;
