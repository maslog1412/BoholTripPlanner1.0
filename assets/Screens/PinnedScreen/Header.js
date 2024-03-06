// Header.js
import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import styles from '../../../homeStyles'; // Import styles

const Header = ({ isSearching}) => {
  return (
    <View style={styles.header}>
      {!isSearching && (
        <View style={styles.logoContainer}>
          <FontAwesome5Icon name="walking" size={40} color="green" style={styles.walkingIcon} />
          <Text style={styles.logoText}>Bohol Trip Planner</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
