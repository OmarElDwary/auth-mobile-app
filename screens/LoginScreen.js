import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CheckBox from 'react-native-checkbox';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/Feather';

const closeIcon = <Icon name="close-o" size={20} color="#ced6e0" />;
const showPass = <Icon1 name="eye" size={20} color="#ced6e0" />;
const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidePass, setHidePass] = React.useState(false);

  const handleLogin = () => {
    // Handle login logic here
  };
  const handleClear = () => {
    setUsername('')
  }
  const handlePass = () => {
    setHidePass(!hidePass)
  };


  return (
    <View style={styles.container}>
      <Image source={require('../assets/5166950.jpg')} style={styles.gradientImage} />
        <View style={[styles.profileContainer, styles.shadowProp]}>
          <Image source={require('../assets/logo.webp')} style={styles.profileImage} />
        </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Log in to your account</Text>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          clearButtonMode='always'
        />
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
             {closeIcon}
        </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={!hidePass}
        />
        <TouchableOpacity style={styles.clearButton} onPress={handlePass}>
          {showPass}
        </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
            <CheckBox />
            <CheckBox />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.link}>Don't have an account? Register</Text>
        <Text style={styles.link}>Forgot password?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientImage: {
    position: 'absolute',
    top: -150,
    left: 0,
    width: '100%',
    height: '50%',
  },
  profileContainer: {
    width: 100,
    height: 100,
    left: 120,
    top: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#f1f2f6',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#2f3542',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    marginBottom: 2,
    height: 55,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 8,
    borderBlockColor: '#ced6e0'
  },
  formContainer: {
    width: '90%',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: '30%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'transparent',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 7
  },
  clearButton: {
    backgroundColor: 'transparent',
    padding: 5,
    marginLeft: 5,
  },
  clearButtonText: {
    fontSize: 16,
    color: 'gray',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnContainer: {
    flexDirection: 'row',
    marginBottom: 6,
    marginTop: 6,
  },
  link: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default LoginForm;