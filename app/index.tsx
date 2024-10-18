import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, TextInput, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function App() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('');
  const [searchMode, setSearchMode] = useState(false);

  const apiKey = 'f64190f2a5c08db737a2ed1391f46723';  

  // Request location permissions and get current location
  const getLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
  };

  // Fetch weather based on current location
  const getWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch weather based on city name
  const searchWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      alert('City not found');
      setLoading(false);
    }
  };

  // Initial location fetching
  useEffect(() => {
    const fetchLocation = async () => {
      await getLocationPermission();
    };
    fetchLocation();
  }, []);

  // Fetch weather when location is available
  useEffect(() => {
    if (location && !searchMode) {
      getWeatherData(location.latitude, location.longitude);
    }
  }, [location]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.header}>Weather App</Text>
          {weather ? (
            <View>
              <Text  style={styles.label}><Entypo name="location" size={24} color="black" /> Location: {weather.name}</Text>
              <Text style={styles.label}> <FontAwesome5 name="temperature-high" size={24} color="black" /> Temperature: {weather.main.temp} °C</Text>
              <Text style={styles.label}><MaterialCommunityIcons name="air-humidifier" size={24} color="black" /> Humidity: {weather.main.humidity} %</Text>
              <Text style={styles.label}><MaterialCommunityIcons name="air-conditioner" size={24} color="black" /> Condition: {weather.weather[0].description}</Text>
            </View>
          ) : (
            <Text>No weather data available</Text>
          )}
          <Button style={styles.btn} title="Refresh" onPress={() => setLoading(true)} />
        </View>
      )}

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          onChangeText={(text) => setCity(text)}
          value={city}
        />
        <Button title="Search" onPress={() => {
          setSearchMode(true);
          searchWeather();
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor:'red',
    borderRadius:12,
    borderWidth: 2,
    margin:10,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  searchContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderColor:'green',
    borderRadius:12,
  },
  btn: {
    borderColor:'red',
    borderRadius:12,
    borderWidth: 2,
  },
});
