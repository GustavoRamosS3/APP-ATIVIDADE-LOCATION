import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import 'react-native-get-random-values';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('SnTpiv3JDJOeBoE8WFQqsK756640sdklWL00M5Qh','VHaVlKb1GsuWAaY13VoOOCwG3zwEJCVsrkCt8ezC');
Parse.serverURL = 'https://parseapi.back4app.com/';


export default function App() {

  (async () => {
    const Materia_prima = Parse.Object.extend('Materia_prima');
    const query = new Parse.Query(Materia_prima);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const codigo = object.get('codigo')
        const nome = object.get('nome')
        const formula = object.get('formula')
        const cas_number = object.get('cas_number')
        const densidade = object.get('densidade')
        const descricao = object.get('descricao')
        console.log(codigo);
        console.log(nome);
        console.log(formula);
        console.log(cas_number);
        console.log(densidade);
        console.log(descricao);
      }
    } catch (error) {
      console.error('Error while fetching Materia_prima', error);
    }
  })();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
