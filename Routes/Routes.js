import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native'; 
import 'react-native-get-random-values';
import Home from '../src/components/Home/HOME.js';
import ListarRotas from '../src/components/ListarRotas/ListarRotas.js';
import ExibirRotas from '../src/components/ExibirRotas/ExibirRotas.js'; 
import GetCurrentLocation from '../src/main/PermissionsAndroid.js';

const Tabs = createBottomTabNavigator();

export default function Routes() {
  useEffect(() => {
    GetCurrentLocation();
  }, []);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
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
