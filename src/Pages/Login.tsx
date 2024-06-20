import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../Component/Button';
import loginStyles from '../Styles/LoginStyles';

const Login: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={loginStyles.background}>
      <View style={loginStyles.overlay}>
        <Text style={loginStyles.title}>Preencha com seus dados!</Text>
        <TextInput style={loginStyles.input} placeholder="Usuário" />
        <TextInput style={loginStyles.input} placeholder="Senha" secureTextEntry />
        <Button title="Login" onPress={() => navigation.navigate('Home')} />
      </View>
    </ImageBackground>
  );
};

export default Login;