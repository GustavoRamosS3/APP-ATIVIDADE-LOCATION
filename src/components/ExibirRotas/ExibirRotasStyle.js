// src/components/ExibirRotas/ExibirRotasStyle.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1', // Cor de fundo mais clara
  },
  map: {
    flex: 1, // O mapa ocupa o espaço disponível acima do menu
    width: '100%',
    overflow: 'hidden',

  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
});
