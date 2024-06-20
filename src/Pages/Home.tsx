import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Component/Header';
import homeStyles from '../Styles/HomeStyles';

const Home: React.FC = () => {
  return (
  
    <View style={homeStyles.container}>
      <Header title="Bem vindo ao Flamengo App!" />
       </View>
  
  );
};

export default Home;