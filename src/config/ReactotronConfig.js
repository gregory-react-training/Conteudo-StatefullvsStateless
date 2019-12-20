import Reactotron from 'reactotron-react-native';
import AsyncStorage from "@react-native-community/async-storage";

if (__DEV__) {
  const tron = Reactotron
    .setAsyncStorageHandler(AsyncStorage)
    .configure({host:'192.168.0.11'}) //CASO NÃO FUNCIONE SEM DEFINIR O IP, COLOCAR IP DA SUA MÁQUINA QUE SERVIRÁ COMO HOST!
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
