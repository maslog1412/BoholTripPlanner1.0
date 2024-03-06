import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  searchIcon: {
    marginRight: 10,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  arrowBackIcon: {
    fontSize: 24,
    color: '#000',
  },
  newsfeed: {
    flex: 1,
  },
  newsItem: {
    flexDirection: 'column',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  newsText: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default styles;
