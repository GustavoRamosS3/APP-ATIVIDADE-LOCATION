// src/components/ListarRotas/ListarRotas.js
import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, TouchableOpacity, ActivityIndicator, Text, Alert, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Parse from '../../config/parseConfig'; // Importa a configuração do Parse
import styles from '../ListarRotas/ListarRotasStyle'; // Importa os estilos
import { useFocusEffect } from '@react-navigation/native'; // Importa useFocusEffect

export default function ListarRotas({ navigation }) {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingRouteId, setEditingRouteId] = useState(null);
  const [newRouteName, setNewRouteName] = useState('');

  const fetchRoutes = async () => {
    setLoading(true); // Mostra o indicador de carregamento enquanto a consulta é feita
    try {
      const Routes = Parse.Object.extend('Route');
      const query = new Parse.Query(Routes);
      query.ascending('createdAt');

      const results = await query.find();
      const formattedRoutes = results.map(route => ({
        id: route.id,
        name: route.get('name'),
        distance: route.get('distance'),
        time: route.get('time'),
        coords: route.get('coords') || [], // Adicione isso para incluir coordenadas
      }));

      setRoutes(formattedRoutes);
    } catch (err) {
      console.error('Erro ao buscar rotas:', err);
      setError('Erro ao carregar rotas');
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchRoutes();
    }, [])
  );

  const handleDeleteRoute = async (id) => {
    try {
      const Routes = Parse.Object.extend('Route');
      const query = new Parse.Query(Routes);
      const route = await query.get(id);
      await route.destroy();
      Alert.alert('Sucesso', 'Rota deletada com sucesso!');
      fetchRoutes(); // Atualiza a lista após deletar
    } catch (err) {
      console.error('Erro ao deletar rota:', err);
      Alert.alert('Erro', 'Não foi possível deletar a rota');
    }
  };

  const handleEditRouteName = async (id) => {
    try {
      const Routes = Parse.Object.extend('Route');
      const query = new Parse.Query(Routes);
      const route = await query.get(id);
      route.set('name', newRouteName);
      await route.save();
      Alert.alert('Sucesso', 'Nome da rota atualizado com sucesso!');
      setEditingRouteId(null);
      setNewRouteName('');
      fetchRoutes(); // Atualiza a lista após editar
    } catch (err) {
      console.error('Erro ao editar rota:', err);
      Alert.alert('Erro', 'Não foi possível editar a rota');
    }
  };

  const handleViewRoute = (routeIds) => {
    navigation.navigate('Exibir Rotas', { routeIds });
  };

  const renderRouteItem = ({ item }) => (
    <View style={styles.routeItem}>
      <View style={styles.routeHeader}>
        <FontAwesome name="road" size={24} color="#FF5722" />
        {editingRouteId === item.id ? (
          <TextInput
            style={styles.routeNameInput}
            value={newRouteName}
            onChangeText={setNewRouteName}
            onSubmitEditing={() => handleEditRouteName(item.id)}
          />
        ) : (
          <Text style={styles.routeName}>{item.name}</Text>
        )}
      </View>
      <Text style={styles.routeDetails}>Distância: {item.distance} km</Text>
      <Text style={styles.routeDetails}>Tempo: {item.time} minutos</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => handleViewRoute([item.id])}
        >
          <Text style={styles.buttonText}>Ver Rota</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            setEditingRouteId(item.id);
            setNewRouteName(item.name);
          }}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteRoute(item.id)}
        >
          <Text style={styles.buttonText}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FF5722" />
        <StatusBar style="auto" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={routes}
        renderItem={renderRouteItem}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}
