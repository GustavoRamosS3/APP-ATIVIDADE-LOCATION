import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1', // Fundo mais claro e suave
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  routeItem: {
    backgroundColor: '#ffffff', // Cor de fundo dos itens de rota
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    elevation: 8,
    borderColor: '#b0bec5', // Cor da borda dos itens
    borderWidth: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  routeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  routeName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#37474f', // Cor do texto do nome da rota (primária)
    marginLeft: 10,
    letterSpacing: 0.5,
  },
  routeDetails: {
    fontSize: 16,
    color: '#607d8b', // Cor do texto dos detalhes (secundária)
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4caf50', // Verde para o botão de edição
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4caf50',
  },
  deleteButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f44336', // Vermelho para o botão de deletar
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f44336',
  },
  viewButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196f3', // Azul para o botão de ver rota
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2196f3',
  },
  buttonText: {
    color: '#ffffff', // Texto branco para contraste
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
  routeNameInput: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#37474f',
    marginLeft: 10,
    letterSpacing: 0.5,
    borderBottomWidth: 1,
    borderBottomColor: '#37474f',
  },
});
