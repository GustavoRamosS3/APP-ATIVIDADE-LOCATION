import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1', // Fundo mais claro e suave
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  routeItem: {
    backgroundColor: '#102c5e', // Cor de fundo dos itens de rota
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    elevation: 8,
    borderColor: '#b0bec5', // Cor da borda dos itens
    borderWidth: 2,
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
    color: '#fff', // Cor do texto do nome da rota (primária)
    marginLeft: 10,
    letterSpacing: 0.5,
  },
  routeDetails: {
    fontSize: 16,
    color: '#fff', // Cor do texto dos detalhes (secundária)
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    
  },
  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#102c5e', // Verde para o botão de edição
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#4caf50',
    marginLeft: 5,
    marginRight: 5,
  },
  deleteButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#102c5e', // Vermelho para o botão de deletar
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#f44336',
    marginLeft: 5,
  },
  viewButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#102c5e', // Azul para o botão de ver rota
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#2196f3',
    marginRight: 5,
    

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
