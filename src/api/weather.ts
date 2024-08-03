// src/api/weather.ts
export const fetchWeatherData: any = async (retries = 3) => {
    try {
      const response = await fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=YOUR_API_KEY');
      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          // Aguarde 1 minuto antes de tentar novamente
          await new Promise(resolve => setTimeout(resolve, 60000));
          return fetchWeatherData(retries - 1);
        }
        throw new Error(`Error fetching weather data: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  