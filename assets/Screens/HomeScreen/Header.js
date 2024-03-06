// Header.js
import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import styles from '../../../homeStyles'; // Import styles

const Header = ({ isSearching, onSearchPress, onSearchInputChange, searchQuery }) => {
  return (
    <View style={styles.header}>
      {!isSearching && (
        <View style={styles.logoContainer}>
          <FontAwesome5Icon name="walking" size={40} color="green" style={styles.youtubeIcon} />
          <Text style={styles.logoText}>Bohol Trip Planner</Text>
        </View>
      )}

      {isSearching ? (
        <View style={styles.searchBarContainer}>
          <FontAwesome5Icon
            name="arrow-left"
            size={24}
            color="#000"
            style={styles.arrowBackIcon}
            onPress={() => {
              onSearchPress(false);
            }}
          />
          <TextInput
            placeholder="Search Destinations"
            style={styles.searchBar}
            onBlur={() => onSearchPress(false)}
            onChangeText={onSearchInputChange}
            value={searchQuery}
          />
        </View>
      ) : (
        <Pressable onPress={() => onSearchPress(true)}>
          {({ pressed }) => (
            <View style={styles.iconContainer}>
              <FontAwesome5Icon
                name="search"
                size={24}
                color={pressed ? '#555' : '#000'}
                style={styles.searchIcon}
              />
            </View>
          )}
        </Pressable>
      )}
    </View>
  );
};

export default Header;
