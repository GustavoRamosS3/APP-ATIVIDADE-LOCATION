import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import 'react-native-get-random-values';
import Home from '../src/components/Home/HOME.js';
import ListarRotas from '../src/components/ListarRotas/ListarRotas.js';
import ExibirRotas from '../src/components/ExibirRotas/ExibirRotas.js'; 
import GetCurrentLocation from '../src/main/PermissionsAndroid.js';

const Tab = createMaterialTopTabNavigator();

export default function Routes() {
  useEffect(() => {
    GetCurrentLocation();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let iconColor = color;

          if (route.name === 'Home') {
            iconName = 'home';
            iconColor = focused ? '#fff' : 'gray';
          } else if (route.name === 'Lista Rotas') {
            iconName = 'list';
            iconColor = focused ? '#fff' : 'gray';
          } else if (route.name === 'Exibir Rotas') {
            iconName = 'map';
            iconColor = focused ? '#fff' : 'gray';
          }

          return <Icon name={iconName} size={size} color={iconColor} />;
        },
        tabBarLabel: ({ focused, color }) => {
          let labelColor = color;
          if (route.name === 'Home') {
            labelColor = focused ? '#fff' : 'gray';
          } else if (route.name === 'Lista Rotas') {
            labelColor = focused ? '#fff' : 'gray';
          } else if (route.name === 'Exibir Rotas') {
            labelColor = focused ? '#fff' : 'gray';
          }
          return (
            <Text style={{ color: labelColor, fontSize: 14 }}>
              {route.name}
            </Text>
          );
        },
        tabBarStyle: {
          backgroundColor: '#102c5e', // Cor de fundo do menu (Primária)
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#fff', // Cor do indicador de aba
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Lista Rotas" component={ListarRotas} />
      <Tab.Screen name="Exibir Rotas" component={ExibirRotas} />
    </Tab.Navigator>
  );
}
