import { Box, Text } from '@chakra-ui/react';

export const WeatherInfo = () => {
  // Exemplo de dados do clima
  const weatherData = {
    temperature: '25°C',
    description: 'Parcialmente nublado',
    humidity: '60%',
    windSpeed: '15 km/h',
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Text fontSize="2xl">Temperatura: {weatherData.temperature}</Text>
      <Text>Descrição: {weatherData.description}</Text>
      <Text>Umidade: {weatherData.humidity}</Text>
      <Text>Velocidade do Vento: {weatherData.windSpeed}</Text>
    </Box>
  );
};
