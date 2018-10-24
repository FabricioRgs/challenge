import { StyleSheet, Platform } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 0,
    backgroundColor: colors.primary,
  },
  headerTitle: {
    fontWeight: 'normal',
    alignSelf: 'center',
    flex: 1,
    textAlign: 'center',
    marginLeft: Platform.OS !== 'ios' ? -30 : 12,
  },
  panel: {
    height: 82,
    backgroundColor: colors.primaryDarker,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.baseMargin,
  },
  panelText: {
    color: colors.white,
    fontSize: 22,
  },
  text: {
    color: colors.regular,
    fontSize: 16,
    marginBottom: 10,
  },
  textBold: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  content: {
    padding: 20,
  },
});

export default styles;
