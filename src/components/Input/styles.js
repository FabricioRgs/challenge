import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 54,
    backgroundColor: colors.primaryDarker,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.inputTextPaddingHorizontal,
    marginBottom: metrics.inputTextMarginBottom,
  },
  secondaryInput: {
    color: colors.dustyGrey,
  },
  secondaryView: {
    backgroundColor: colors.gallery,
    borderWidth: 0.8,
    borderColor: colors.dustyGrey,
  },
  icon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    fontSize: fonts.regular,
    color: colors.white,
    fontFamily: fonts.QuicksandRegular,
    marginBottom: 0,
    padding: 0,
  },
});

export default styles;
