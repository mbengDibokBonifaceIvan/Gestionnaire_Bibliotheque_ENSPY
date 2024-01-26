import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewNav from './components/navigation/NewNav';


export default function App() {
  return (
      <NewNav />
  );
}

 {/*<NavApp />*/}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
