import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  default: {
    height: 54,
    backgroundColor: colors.buttons,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },
  clean: {
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.primary,
    marginTop: metrics.baseMargin,
  },
  full: {
    height: 54,
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },
  title: {
    fontSize: fonts.base,
    fontFamily: fonts.QuicksandBold,
    color: colors.primary,
  },
  titleClean: {
    color: colors.primary,
  },
  titleFull: {
    color: colors.app,
  },
});

export default styles;
