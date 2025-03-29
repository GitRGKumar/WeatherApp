import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// OpenWeather API Key
const API_KEY = 'd822dec225be6eab91a2e1d999dc3bbf';

// Base URL for OpenWeather API
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
export const fetchWeatherData = async (city: string) => {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);

    // Store the last searched city
    await AsyncStorage.setItem('lastCity', city);

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Error fetching weather data');
  }
};

// Retrieve the last searched city from storage
export const getLastSearchedCity = async (): Promise<string | null> => {
  try {
    const storedCity = await AsyncStorage.getItem('lastCity');
    return storedCity ? storedCity : null;
  } catch (error) {
    console.error('Error retrieving last city:', error);
    return null;
  }
};
