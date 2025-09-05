import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
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
    marginTop: 40,
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '90px auto 62px',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    margin: '0 29px',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 700,
  },
  btnBg: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '80px 0',
  },
  button: {
    backgroundColor: '#E3C000',
    borderRadius: 10,
    paddingHorizontal: 31,
    paddingVertical: 13,
    margin: '0 30px',
    fontSize: 20,
  },
});
