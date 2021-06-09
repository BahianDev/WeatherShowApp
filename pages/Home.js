import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from '../components/WeatherInfo';
import UnitsPciker from '../components/UnitsPicker';
import ReloadIcon from '../components/ReloadIcon';
import WeatherDetails from '../components/WeatherDetails';
import PrimaryButton from '../components/PrimaryButton';
import { WEATHER_API_KEY } from '@env'

import { colors } from '../utils/index';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function Home({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState('metric');

  const load = async () => {
    setCurrentWeather(null)
    setErrorMsg(null)
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const {latitude, longitude} = location.coords;
      console.log(latitude)
      console.log(longitude)
      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&lang=pt_br&appid=${WEATHER_API_KEY}`;
      const response = await fetch(weatherUrl);
      const result = await response.json();
      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMsg(result.message);
      }
      setLocation(location.coords);
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  useEffect(() => {
    load()
  }, [unitsSystem]);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  if (currentWeather) {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <ReloadIcon load={load}/>
          <UnitsPciker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} /> 
          <WeatherInfo currentWeather={currentWeather}/>
        </View>
        <View style={styles.center}>
            <PrimaryButton onPress={() => navigation.navigate('search')} >
                <Text style={{color: 'white'}}>Search</Text>
            </PrimaryButton>
        </View>
        <WeatherDetails currentWeather={currentWeather} unitsSystem={unitsSystem}/>
      </View>
    );
  } else if (errorMsg) {
    return (
      <View style={styles.container}>
        <ReloadIcon load={load}/>
        <Text style={{ textAlign: 'center' }}>{errorMsg}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR}/> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center',
    flex: 1
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  buttonSearch: {
    alignItems: "center",
    width: 100,
    padding: 10,
    backgroundColor: colors.PRIMARY_COLOR,
    color: colors.SECONDARY_COLOR,
    borderRadius: 10,
  }
});
