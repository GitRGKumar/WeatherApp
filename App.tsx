import React from 'react';
import { WeatherProvider } from './src/context/WeatherContext';
import { ThemeProvider } from './src/context/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';

const App = () => (
  <ThemeProvider>
    <WeatherProvider>
      <HomeScreen />
    </WeatherProvider>
  </ThemeProvider>
);

export default App;
