import React from 'react';
import { View, Text } from 'react-native';
import headerStyles from '../Styles/HeaderStyles';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>{title}</Text>
    </View>
  );
};

export default Header;
