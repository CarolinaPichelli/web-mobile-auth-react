import { StyleSheet } from 'react-native';

const COLORS = {
  primary: '#759aab',   
  secondary: '#ffbe98', 
  white: '#FFFFFF',
  lightGray: '#F5F5F7', 
  darkGray: '#A9A9A9',  
  black: '#333333',     
};

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.secondary,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: COLORS.white,
    fontFamily: 'sans-serif-light',
  },
  formContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 25,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
    marginTop: '20%',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.darkGray,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    marginHorizontal: 8,
    height: 55,
  },
  card: {  
    marginHorizontal: 16,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 7,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  bottomText: {
    fontSize: 14,
    color: COLORS.darkGray,
  },
  linkText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

