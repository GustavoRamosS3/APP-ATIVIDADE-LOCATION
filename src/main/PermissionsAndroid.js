import { PermissionsAndroid, Platform, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "This app needs access to your location.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  // No permission needed for iOS in this example
  return true;
};

const GetCurrentLocation = async () => {
  const hasPermission = await requestLocationPermission();
  
  if (!hasPermission) {
    Alert.alert("Location permission denied");
    return;
  }

  Geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);
    },
    (error) => {
      console.error("Error getting location:", error);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
};

export default GetCurrentLocation;
