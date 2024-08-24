// src/components/ExibirRotas/ExibirRotas.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import Parse from '../../config/parseConfig'; // Importa a configuração do Parse

const ExibirRotas = () => {
  const [routes, setRoutes] = useState([]);
  const route = useRoute(); // Use o hook useRoute para acessar os parâmetros de navegação
  const { routeIds } = route.params || {}; // Acesse routeIds de forma segura

  useEffect(() => {
    const fetchRoutes = async () => {
      if (routeIds && routeIds.length > 0) {
        try {
          const Routes = Parse.Object.extend('Route');
          const query = new Parse.Query(Routes);
          query.containedIn('objectId', routeIds);

          const results = await query.find();
          const formattedRoutes = results.map(route => ({
            id: route.id,
            coords: route.get('coords') || [], // Obtenha as coordenadas
          }));

          setRoutes(formattedRoutes);
        } catch (error) {
          console.error('Erro ao buscar rotas:', error);
        }
      }
    };

    fetchRoutes();
  }, [routeIds]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.0996,
          longitude: -47.7143,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {routes.map(route => (
          <Polyline
            key={route.id}
            coordinates={route.coords}
            strokeColor="#254b59"
            strokeWidth={4}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default ExibirRotas;
