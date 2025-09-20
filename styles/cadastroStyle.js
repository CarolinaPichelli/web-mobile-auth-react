import { StyleSheet } from 'react-native';

const COLORS = {
  primary: '#759aab',
  secondary: '#ffbe98',
  white: '#FFFFFF',
  lightGray: '#F5F5F7',
  darkGray: '#A9A9A9',
  black: '#333333',
};

export const cadastroStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.secondary,
    height: 220,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  appName: {
    fontSize: 34,
    fontWeight: 'bold',
    color: COLORS.white,
    letterSpacing: 1,
  },
  formContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 25,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 6,
    marginTop: '20%',
  },
  card: {  
    marginHorizontal: 16,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.darkGray,
    marginBottom: 28,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 18,
    minHeight: 55,
    marginHorizontal: 8,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
    marginHorizontal: 8,

    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 0.5,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  bottomText: {
    fontSize: 14,
    color: COLORS.darkGray,
  },
  linkText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
    marginLeft: 6,
  },
});
