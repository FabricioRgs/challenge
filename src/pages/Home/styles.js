import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  header: {
    borderBottomWidth: 0,
    backgroundColor: colors.primary,
  },
  headerRight: {
    marginRight: metrics.basePadding,
  },
  headerLeft: {
    marginLeft: metrics.basePadding,
  },
  headerTitle: {
    fontWeight: 'normal',
    fontFamily: fonts.QuicksandBold,
    alignSelf: 'center',
    flex: 1,
    textAlign: 'center',
    marginRight: Platform.OS !== 'ios' ? -30 : 12,
    color: colors.app,
  },
  txtName: {
    color: colors.darker,
    fontFamily: fonts.QuicksandRegular,
    fontSize: 14,
  },
  txtPrice: {
    fontFamily: fonts.QuicksandRegular,
    fontSize: 12,
  },
  containerItem: {
    backgroundColor: colors.gallery,
    marginBottom: 5,
    borderRadius: 3,
    paddingVertical: 5,
    paddingBottom: 8,
    paddingHorizontal: 5,
  },
  containerLine: {
    flexDirection: 'row',
    marginRight: 5,
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryDarker,
    paddingTop: 5,
  },
  searchIcon: {
    padding: 10,
    marginLeft: 5,
    position: 'absolute',
    color: colors.white,
    marginTop: 6,
  },
  input: {
    fontFamily: fonts.QuicksandRegular,
    height: 52,
    color: colors.white,
    backgroundColor: colors.darkTransparent,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding * 2 + 3,
    fontSize: fonts.regular,
    width: metrics.screenWidth - 20,
    marginBottom: 5,
  },
  scroll: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default styles;
