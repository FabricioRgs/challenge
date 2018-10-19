import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
    }),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  welcome: {
    fontFamily: fonts.QuicksandBold,
    fontSize: fonts.extreme,
    textAlign: 'center',
    margin: 10,
    color: colors.white,
    marginBottom: 40,
  },
  input: {
    fontFamily: fonts.QuicksandRegular,
    height: 52,
    color: colors.white,
    backgroundColor: colors.darkTransparent,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: (metrics.basePadding * 2) + 3,
    fontSize: fonts.regular,
    width: metrics.screenWidth - 40,
    marginBottom: 10,
  },
  btEntrar: {
    backgroundColor: colors.buttons,
    height: 52,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },
  txtEntrar: {
    color: colors.white,
    fontFamily: fonts.QuicksandBold,
    fontSize: fonts.regular,
  },
  searchSection: {
    flexDirection: 'row',
  },
  searchIcon: {
    padding: 10,
    marginLeft: 5,
    position: 'absolute',
    color: colors.white,
    marginTop: 6,
  },
  txtProvedor: {
    fontFamily: fonts.QuicksandRegular,
    color: colors.white,
    fontSize: fonts.small,
    textDecorationLine: 'underline',
  },
  provedorContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default styles;
