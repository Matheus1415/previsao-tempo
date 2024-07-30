import { useState } from 'react';
import { Input, Button, VStack } from '@chakra-ui/react';

export const SearchBar = () => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    // Lógica para buscar a previsão do tempo para a cidade
    console.log(`Buscando clima para: ${city}`);
  };

  return (
    <VStack spacing={4}>
      <Input
        placeholder="Digite o nome da cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={handleSearch} colorScheme="blue">
        Buscar
      </Button>
    </VStack>
  );
};
