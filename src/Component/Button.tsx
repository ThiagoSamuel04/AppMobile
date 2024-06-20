import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import buttonStyles from '../Styles/ButtonStyles';


const Button: React.FC<{ onPress: () => void; title: string }> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
      <Text style={buttonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;