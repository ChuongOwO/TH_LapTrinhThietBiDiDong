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
      <View style={styles.logo}>
        <Fontisto name="locked" size={150} color="#000000" />
      </View>
      <View style={styles.inner}>
        <Text style={styles.title}>FORGET</Text>
        <Text style={styles.title}>PASSWORD</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: '700' }}>NEXT</Text>
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
    margin: '76px auto 0',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '37px auto 0px',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    margin: '32px 0 10px',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 700,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    backgroundColor: '#C4C4C4',
    padding: 12,
    margin: '30px 0 0',
    width: '100%'
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#E3C000',
    paddingHorizontal: 120,
    paddingVertical: 12,
    margin: '43px auto 142px',
    fontSize: 18,
  },
});
