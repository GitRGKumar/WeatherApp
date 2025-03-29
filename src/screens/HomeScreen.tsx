import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, Switch } from 'react-native';
import { useWeather } from '../context/WeatherContext';
import { useTheme } from '../context/ThemeContext';
import WeatherCard from '../components/WeatherCard';

const HomeScreen = () => {
  const [city, setCity] = useState('');
  const { error, fetchWeather } = useWeather();
  const { isDarkMode, toggleTheme } = useTheme();

  // Handle city input validation
  const handleCityInput = (input: string) => {
    const sanitizedInput = input.replace(/[^a-zA-Z\s]/g, '');
    if (input !== sanitizedInput) {
      Alert.alert('Invalid Character', 'Only letters and spaces are allowed.');
    }
    setCity(sanitizedInput);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* Text Input & Button */}
      <TextInput
        style={[styles.input, isDarkMode ? styles.darkInput : styles.lightInput]}
        placeholder="Enter city name"
        placeholderTextColor={isDarkMode ? '#ccc' : '#666'}
        value={city}
        onChangeText={handleCityInput}
      />
      <Button title="Get Weather" onPress={() => fetchWeather(city)} />
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* Weather Card */}
      <WeatherCard />

      {/* Toggle Button UI */}
      <View style={styles.toggleContainer}>
        <Text style={[styles.toggleText, !isDarkMode ? styles.activeTextLight : styles.inactiveTextDark]}>
          Light Mode
        </Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
        <Text style={[styles.toggleText, isDarkMode ? styles.activeTextDark : styles.inactiveTextLight]}>
          Dark Mode
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#222',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  darkInput: {
    borderColor: '#555',
    color: '#fff',
  },
  lightInput: {
    borderColor: '#ccc',
    color: '#000',
  },
  error: {
    color: 'red',
  },
  toggleContainer: {
    position: 'absolute',
    bottom: 40, // Places toggle at the bottom
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  toggleText: {
    fontSize: 16,
    marginHorizontal: 10, // Space between text and switch
  },
  activeTextLight: {
    fontWeight: 'bold',
    color: '#333', // Darker text for light mode
  },
  inactiveTextLight: {
    color: '#888', // Lighter gray for inactive text in light mode
  },
  activeTextDark: {
    fontWeight: 'bold',
    color: '#fff', // White for active text in dark mode
  },
  inactiveTextDark: {
    color: '#aaa', // Lighter gray for inactive text in dark mode
  },
});

export default HomeScreen;
