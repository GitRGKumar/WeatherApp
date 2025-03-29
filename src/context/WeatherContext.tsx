import React, { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import { fetchWeatherData, getLastSearchedCity } from '../services/weatherService';

// Define the shape of the weather context
interface WeatherContextType {
  weather: any;
  error: string;
  fetchWeather: (city: string) => Promise<void>;
  lastCity: string;
}

// Create the WeatherContext with default values
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [lastCity, setLastCity] = useState<string>('');

  // Fetch weather data for a given city
  const fetchWeather = async (city: string) => {
    try {
      setError('');
      const data = await fetchWeatherData(city);
      setWeather(data);
      setLastCity(city);
    } catch {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

  // Load last searched city when the app starts
  useEffect(() => {
    const loadLastCity = async () => {
      const storedCity = await getLastSearchedCity();
      if (storedCity) {
        setLastCity(storedCity);
        fetchWeather(storedCity); // Automatically fetch weather for last city
      }
    };

    loadLastCity();
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, error, fetchWeather, lastCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook to use WeatherContext
export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
