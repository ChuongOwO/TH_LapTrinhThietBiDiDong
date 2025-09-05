import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['#c8f3f6', '#e2f5f6', '#37D6F8']}
      locations={[0, 0.8, 1]}
      style={styles.container}>
      <View style={styles.logo}></View>
      <View style={styles.inner}>
        <Text style={styles.title}>GROW</Text>
        <Text style={styles.title}>YOUR BUSINESS</Text>
      </View>
      <View>
        <Text style={styles.text}>
          We will help you to grow your business usingonline server
        </Text>
      </View>
      <View style={styles.btnBg}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: '700' }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: '700' }}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.link}>HOW WE WORK?</Text>
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
    padding: 29,
  },
  logo: {
    border: '10px solid #000',
    borderRadius: '50%',
    width: '140px',
    height: '140px',
    marginTop: 69,
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '66px auto 0px',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    margin: '50px 0 50px',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 700,
  },
  btnBg: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '30px 0 50px',
  },
  button: {
    backgroundColor: '#E3C000',
    paddingHorizontal: 31,
    paddingVertical: 13,
    margin: '0 30px',
    fontSize: 20,
  },
  link: {
    margin: '0 0 70px',
    fontWeight: 700
  },
});
