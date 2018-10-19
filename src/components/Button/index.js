import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { colors } from 'styles';
import styles from './styles';

const Button = ({
  onPress,
  title,
  type,
  loading,
}) => {
  if (type === 'clean') {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.clean}
      >
        { loading ?
          <ActivityIndicator size="large" color={colors.primary} /> :
          <Text style={[styles.title, styles.titleClean]}>
            { title }
          </Text>
        }
      </TouchableOpacity>
    );
  } else if (type === 'full') {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.full}
      >
        { loading ?
          <ActivityIndicator size="large" color={colors.primary} /> :
          <Text style={[styles.title, styles.titleFull]}>
            { title }
          </Text>
        }
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.default}
    >
      { loading ?
        <ActivityIndicator size="large" color={colors.primary} /> :
        <Text style={[styles.title]}>
          { title }
        </Text>
      }
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Button;
