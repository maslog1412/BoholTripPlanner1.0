// NumberInput.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { pinnedStyles } from '../../../pinnedStyles';

const NumberInput = ({ label, value, onValueChange }) => {
  const handleIncrease = () => {
    onValueChange(value + 1);
  };

  const handleDecrease = () => {
    if (value > 1) {
      onValueChange(value - 1);
    }
  };

  return (
    <View style={pinnedStyles.numberInputContainer}>
      <Text style={pinnedStyles.inputLabel}>{label}</Text>
      <Text style={pinnedStyles.inputBox}>{value.toString()}</Text>
      <TouchableOpacity style={pinnedStyles.arrowButton} onPress={handleIncrease}>
        <FontAwesome5 name="chevron-up" style={pinnedStyles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={pinnedStyles.arrowButton} onPress={handleDecrease}>
        <FontAwesome5 name="chevron-down" style={pinnedStyles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default NumberInput;
