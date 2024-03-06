// pinnedStyles.js
import { StyleSheet } from 'react-native';

export const pinnedStyles = StyleSheet.create({
  // Styles for NumberInput
  numberInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  inputLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    width: 50,
  },
  arrowButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginLeft: 10,
    padding: 5,
  },
  arrowButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  arrowIcon: {
    fontSize: 20, // Adjust the size as needed
    color: 'black', // Set the color you want
  },

  // Styles for CalendarPickerComponent
  dateText: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  daysText: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  // Styles from headerStyles used in Header.js
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default pinnedStyles;
