// src/navigation/Routes.js
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native'; 
import 'react-native-get-random-values';
import Home from '../src/components/Home/HOME.js'; // Corrigido o caminho
import ListarRotas from '../src/components/ListarRotas/ListarRotas.js'; // Corrigido o caminho
import ExibirRotas from '../src/components/ExibirRotas/ExibirRotas.js'; // Corrigido o caminho
import GetCurrentLocation from '../src/main/PermissionsAndroid.js'; // Corrigido o caminho

const Tabs = createBottomTabNavigator();

export default function Routes() {
  useEffect(() => {
    // Solicitar permissão e obter localização ao montar o componente
    GetCurrentLocation();
  }, []);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let iconColor = color;

          if (route.name === 'Home') {
            iconName = 'home';
            iconColor = focused ? '#ffab91' : 'gray';
          } else if (route.name === 'Lista Rotas') {
            iconName = 'list';
            iconColor = focused ? '#ffab91' : 'gray';
          } else if (route.name === 'Exibir Rotas') {
            iconName = 'map';
            iconColor = focused ? '#ffab91' : 'gray';
          }

          return <Icon name={iconName} size={size} color={iconColor} />;
        },
        tabBarLabel: ({ focused, color }) => {
          let labelColor = color;
          if (route.name === 'Home') {
            labelColor = focused ? '#ffab91' : 'gray';
          } else if (route.name === 'Lista Rotas') {
            labelColor = focused ? '#ffab91' : 'gray';
          } else if (route.name === 'Exibir Rotas') {
            labelColor = focused ? '#ffab91' : 'gray';
          }
          return (
            <Text style={{ color: labelColor, fontSize: 14 }}>
              {route.name}
            </Text>
          );
        },
        tabBarStyle: {
          backgroundColor: '#37474f', // Cor de fundo do menu (Primária)
          borderTopColor: '#eceff1', // Cor do topo da barra de navegação
        },
      })}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Lista Rotas" component={ListarRotas} />
      <Tabs.Screen name="Exibir Rotas" component={ExibirRotas} />
    </Tabs.Navigator>
  );
}
