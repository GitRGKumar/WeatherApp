import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useWeather } from '../context/WeatherContext';

const WeatherCard: React.FC = () => {
  const { weather } = useWeather();

  if (!weather) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{weather.name}</Text>
      <Text style={styles.temp}>{weather.main.temp}°C</Text>
      <Text style={styles.condition}>{weather.weather[0].description}</Text>
      <Image
        source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#4A90E2', // Vibrant blue background
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: '80%',
    alignSelf: 'center',
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  temp: {
    fontSize: 22,
    color: '#fff',
  },
  condition: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#fff',
  },
  icon: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
});

export default WeatherCard;