import {
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['#c8f3f6', '#e2f5f6', '#37D6F8']}
      locations={[0, 0.8, 1]}
      style={styles.container}>
      <View>
        <Text style={styles.logo}>CODE</Text>
      </View>
      <View style={styles.inner}>
        <Text style={styles.title}>VERIFICATION</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Enter ontime password sent on ++849092605798
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: '700' }}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00CCF9',
    padding: 30,
  },
  logo: {
    margin: '113px auto 0',
    fontWeight: 700,
    fontSize: 60,
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '62px auto 0px',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    margin: '50px 0 30px',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 700,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  input: {
    width: 40,
    height: 40,
    fontSize: 16,
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#E3C000',
    paddingHorizontal: 90,
    paddingVertical: 12,
    margin: '34px auto 119px',
    fontSize: 18,
  },
});
