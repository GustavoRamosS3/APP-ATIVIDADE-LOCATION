import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './HomeStyle.js';
import 'react-native-get-random-values';
import { saveRoute } from '../../services/routeService.js';
import { formatDate } from '../../utils/formatDate.js';

const Home = () => {
  // Estados
  const [isMapVisible, setIsMapVisible] = useState(true);
  const [location, setLocation] = useState(null);
  const [startLocation, setStartLocation] = useState(null);
  const [watching, setWatching] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);
  const [routeName, setRouteName] = useState('');
  const [routeTime, setRouteTime] = useState(0);
  const [routeDistance, setRouteDistance] = useState(0);
  const [timer, setTimer] = useState(null);
  const [inputVisible, setInputVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  // Funções auxiliares
  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permissão de localização negada");
        return false;
      }
      return true;
    } catch (err) {
      console.warn('Erro ao solicitar permissão de localização:', err);
      return false;
    }
  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const calculateDistance = (coords) => {
    let distance = 0;
    for (let i = 0; i < coords.length - 1; i++) {
      const from = coords[i];
      const to = coords[i + 1];
      distance += getDistanceFromLatLonInKm(from.latitude, from.longitude, to.latitude, to.longitude);
    }
    return distance;
  };

  const resetAppState = () => {
    setRouteCoords([]);
    setRouteName('');
    setRouteTime(0);
    setRouteDistance(0);
    setInputVisible(false);
    setIsRecording(false);
  };

  // Funções de ação
  const startWatching = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) return;

    const watcher = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        distanceInterval: 1,
      },
      (newLocation) => {
        setLocation(newLocation.coords);
        setRouteCoords(prevCoords => {
          const lastCoord = prevCoords[prevCoords.length - 1];
          if (lastCoord) {
            const distanceMoved = getDistanceFromLatLonInKm(
              lastCoord.latitude, lastCoord.longitude,
              newLocation.coords.latitude, newLocation.coords.longitude
            );
            if (distanceMoved >= 0.001) {
              return [...prevCoords, newLocation.coords];
            }
          } else {
            return [newLocation.coords];
          }
          return prevCoords;
        });
      }
    );

    setWatching(watcher);

    const timerId = setInterval(() => {
      setRouteTime(prevTime => prevTime + 1);
    }, 1000);

    setTimer(timerId);
  };

  const stopWatching = () => {
    if (watching) {
      watching.remove();
      setWatching(null);
    }
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
    setRouteDistance(calculateDistance(routeCoords));
  };

  const startRecording = async () => {
    await getCurrentLocation();
    if (startLocation) {
      setRouteCoords([startLocation]);
    }
    startWatching();
    setIsRecording(true);
  };

  const getCurrentLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) return;

    const { coords } = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setStartLocation({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const handlePress = () => {
    if (isRecording) {
      stopWatching();
      setInputVisible(true);
    } else {
      startRecording();
    }
  };

  const handleSaveRoute = async () => {
    if (routeName.trim().length > 0) {
      const now = new Date();
      try {
        console.log('Salvando rota:', { routeName, routeCoords, routeTime, routeDistance });
        await saveRoute({
          name: routeName,
          coords: routeCoords,
          time: routeTime,
          distance: routeDistance,
          date: formatDate(now),
        });
        resetAppState();
        Alert.alert('Sucesso', 'Rota salva com sucesso!');
      } catch (error) {
        console.error('Erro ao salvar a rota:', error);
        Alert.alert('Erro', 'Não foi possível salvar a rota');
      }
    } else {
      Alert.alert('Nome da rota não pode estar vazio');
    }
  };

  const handleCancel = () => {
    resetAppState();
  };

  // Efeitos
  useEffect(() => {
    const initializeMap = async () => {
      await getCurrentLocation();
      setIsMapVisible(true);
    };
    initializeMap();

    return () => {
      if (watching) {
        watching.remove();
      }
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [watching, timer]);

  // Renderização
  return (
    <View style={styles.container}>
      {/* Mapa */}
      {isMapVisible && startLocation && (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: startLocation.latitude,
              longitude: startLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation
          >
            {routeCoords.length > 0 && (
              <Polyline
                coordinates={routeCoords}
                strokeColor="blue"
                strokeWidth={5}
              />
            )}
            {location && <Marker coordinate={location} pinColor='black' />}
          </MapView>
        </View>
      )}

      {/* Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text style={styles.btnText}>
            {inputVisible ? 'Parar Gravação' : isRecording ? 'Parar Gravação' : 'Gravar Rota'}
          </Text>
        </TouchableOpacity>

        {isRecording && (
          <View style={styles.recordingContainer}>
            <Text>Tempo: {Math.floor(routeTime / 60)}:{('0' + (routeTime % 60)).slice(-2)}</Text>
            <Text>Distância: {routeDistance.toFixed(2)} km</Text>
          </View>
        )}

        {/* Input para nome da rota */}
        {inputVisible && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nome da rota"
              value={routeName}
              onChangeText={setRouteName}
            />
            <TouchableOpacity style={styles.cancelBtn} onPress={handleCancel}>
              <Text style={styles.cancelBtnText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addBtn} onPress={handleSaveRoute}>
              <Text style={styles.addBtnText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;
