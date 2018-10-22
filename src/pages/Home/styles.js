import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
    paddingHorizontal: 10,
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
});

export default styles;
