import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native.js';

// Configura o AsyncStorage para Parse
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('tDxM5Xyed1Au7EPmgJNm5OoSWOnwOq5WAJ2tqr2m', 'cDkN8LYKfMYaUEFIiOH9DFCEtKndha0Z5CLC7p45');
Parse.serverURL = 'https://parseapi.back4app.com';

export default Parse;
