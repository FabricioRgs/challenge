import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

class Details extends Component {
  static navigationOptions = () => ({
    title: 'Detalhes do Produto',
    headerTitleStyle: styles.headerTitle,
    headerStyle: styles.header,
  });
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
      }),
    }).isRequired,
  };
  componentWillMount() {
    const { navigation } = this.props;
    const product = navigation.getParam('item', {});
    console.tron.log(product);
  }

  render() {
    const { name, price } = this.props.navigation.getParam('item', {});
    return (
      <View style={styles.container}>
        <View style={styles.panel}>
          <Text style={styles.panelText}>{name}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            <Text style={styles.textBold}>Preço R$:</Text> {price.toFixed(2).replace('.', ',')}
          </Text>
        </View>
      </View>
    );
  }
}

export default Details;
