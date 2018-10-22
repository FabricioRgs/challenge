import { StyleSheet, Platform } from 'react-native';
import { colors, fonts, metrics } from 'styles';

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
    fontFamily: fonts.QuicksandRegular,
    alignSelf: 'center',
    flex: 1,
    textAlign: 'center',
    marginLeft: Platform.OS !== 'ios' ? -30 : 12,
    color: colors.app,
  },
  containerDados: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    height: 45,
    color: colors.white,
    backgroundColor: colors.darkTransparent,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: 10,
    fontSize: 16,
    width: metrics.screenWidth - 40,
    marginBottom: 10,
    paddingTop: 0,
    paddingBottom: 0,
    textAlignVertical: 'center',
  },
  footer: {
    height: 10,
  },
});

export default styles;
