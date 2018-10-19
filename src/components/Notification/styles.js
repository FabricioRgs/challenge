import { StyleSheet } from 'react-native';
import { fonts, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '90%',
    backgroundColor: colors.blue,
    top: '50%',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  overlay: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fonts.small,
    textAlign: 'center',
    color: colors.white,
  },
  button: {
    position: 'absolute',
    right: 20,
  },
});

export default styles;
