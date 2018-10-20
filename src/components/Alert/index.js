import { Alert } from 'react-native';

const alert = (text, onConfirm = () => {}) => Alert.alert(
  'SisControl',
  text,
  [
    { text: 'Ok', onPress: onConfirm },
  ],
  { cancelable: false },
);

const confirm = (text, onConfirm = () => {}, onCancel = () => {}) => Alert.alert(
  'SisControl',
  text,
  [
    { text: 'Ok', onPress: onConfirm },
    { text: 'Cancelar', style: 'cancel', onPress: onCancel },
  ],
  { cancelable: false },
);

export default { alert, confirm };
