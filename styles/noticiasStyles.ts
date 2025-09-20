import { StyleSheet } from 'react-native';

const COLORS = {
  primary: '#759AAB', 
  background: '#F8F9FA',
  white: '#FFFFFF',
  cardBackground: '#FFFFFF',
  textPrimary: '#212529',
  textSecondary: '#6C757D',
  borderColor: '#E0E0E0',
};

export const noticiasStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  content: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 25,
    textAlign: 'center',
  },

  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 16,
  },

  card: {
    backgroundColor: COLORS.cardBackground,
    padding: 18,
    borderRadius: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  cardContent: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },

  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 18,
    borderRadius: 12,
    fontSize: 15,
    color: COLORS.textPrimary,
  },
  textArea: {
    height: 160,
    textAlignVertical: 'top',
    paddingTop: 14,
  },

  emptyListText: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 15,
    color: COLORS.textSecondary,
  },

  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },

    cardImage: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginBottom: 12,
  },

  fab: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: COLORS.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
