import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
    padding: 40,
    borderRadius: 30,
    width: '90%',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    color: 'black'
  }
});