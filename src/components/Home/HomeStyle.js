import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Mantém o menu na parte inferior
    backgroundColor: '#eceff1', // Fundo suave e elegante
  },
  mapContainer: {
    flex: 1, // O mapa ocupa o espaço disponível acima do menu
    width: '100%',
    borderTopLeftRadius: 20, // Bordas arredondadas no topo
    borderTopRightRadius: 20, 
    overflow: 'hidden',
    marginBottom: 10, // Margem para separar do menu
  },
  map: {
    width: '100%',
    height: '100%',
  },
  menuContainer: {
    backgroundColor: '#37474f', // Cor de fundo do menu (Primária)
    paddingVertical: 15,
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
  },
  btn: {
    backgroundColor: '#ffab91', // Cor do botão (Ação)
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 10,
    elevation: 5,
  },
  btnText: {
    fontSize: 18,
    color: '#ffffff', // Texto branco para contraste
    fontWeight: 'bold',
    textAlign: 'center',
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
    backgroundColor: '#d32f2f', // Cor do botão de cancelar (Vermelho)
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  cancelBtnText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  addBtn: {
    backgroundColor: '#388e3c', // Cor do botão de adicionar (Verde Escuro)
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addBtnText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default styles;
