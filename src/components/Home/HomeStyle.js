import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Mantém o menu na parte inferior

  },
  mapContainer: {
    flex: 1, // O mapa ocupa o espaço disponível acima do menu
    width: '100%',
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  menuContainer: {
    backgroundColor: '#102c5e', // Cor de fundo do menu (Primária)
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  recordingContainer: {
    alignItems: 'center',
    marginBottom: 10,
    color: '#fff'
  },
  recordingText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#fff', // Cor do botão (Ação)
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 10,
    marginTop: 3,
    elevation: 5,
  },
  btnText: {
    fontSize: 15,
    color: '#102c5e',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  
  inputContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5', // Cor da borda do input (Secundária)
    width: '100%',
    marginBottom: 20,
    fontSize: 16,
    padding: 10,
    color: '#37474f', // Texto com a cor primária
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: '#d32f2f',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 17,
    alignItems: 'center',
    marginLeft: 5,
  },
  cancelBtnText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  addBtn: {
    flex: 1,
    backgroundColor: '#388e3c',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 17,
    alignItems: 'center',
    marginRight: 5,
  },
  addBtnText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default styles;
